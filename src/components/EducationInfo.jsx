"use client"
import Image from "next/image";
import {Formik, Form, Field, ErrorMessage} from "formik"
import PrevToNext from "./PrevToNext";
import { useSelector } from "react-redux";
import * as Yup from "yup";

export default function EducationInfo() {
    const formData = useSelector(state => state.educationInfoSlice.formData)
    const SignupSchema = Yup.object().shape({
        sscPassingYear: Yup.string()
          .min(2, "Too short!")
          .max(50, "Too long!")
          .required("SSC passing year is required"),
        sscPoint: Yup.string()
          .min(2, "Too short!")
          .max(50, "Too long!")
          .required("SSC point is required"),
        sscRoll: Yup.string()
          .min(2, "Too short!")
          .max(50, "Too long!")
          .required("SSC roll is required"),
        sscBoard: Yup.string()
          .min(2, "Too short!")
          .max(50, "Too long!")
          .required("SSC board required"),
        hscPassingYear: Yup.string()
          .min(2, "Too short!")
          .max(50, "Too long!")
          .required("HSC passing year required"),
        hscPoint: Yup.string()
          .min(2, "Too short!")
          .max(50, "Too long!")
          .required("HSC point is required"),
        hscRoll: Yup.string()
          .min(2, "Too short!")
          .max(50, "Too long!")
          .required("HSC roll is required"),
        hscBoard: Yup.string()
          .min(2, "Too short!")
          .max(50, "Too long!")
          .required("HSC board is required"),
    });
  return (
    <>
      <Formik
        initialValues={{
            sscPassingYear: formData.sscPassingYear || "",
            sscPoint: formData.sscPoint || "",
            sscRoll: formData.sscRoll || "",
            sscBoard: formData.sscBoard || "",
            hscPassingYear: formData.hscPassingYear || "",
            hscPoint: formData.hscPoint || "",
            hscRoll: formData.hscRoll || "",
            hscBoard: formData.hscBoard || ""
        }}
        validationSchema={SignupSchema}
      >
          {
            ({values, validationSchema, validateForm}) => (
              <Form className="bg-white rounded-md p-3">
                <h1 className="text-center my-2 text-xl">Create Your Account & Unlock Features</h1>
                <ul className="flex items-center justify-around my-3 completion-tracker">
                  <li className="w-[1rem] h-[1rem] bg-blue-700 rounded-full border-2 border-blue-700"></li>
                  <li className="w-[1rem] h-[1rem] bg-blue-700 rounded-full border-2 border-blue-700"></li>
                  <li className="w-[1rem] h-[1rem] bg-blue-700 rounded-full border-2 border-blue-700"></li>
                </ul>
                <h2 className="text-lg text-center my-3 border-b-[1px] border-blue-700">Education Information</h2>
                <div>
                    <h3 className="text-lg font-semibold mb-2">SSC result information</h3>
                    <div className="flex items-stretch justify-center gap-2">
                        <div>
                            <label htmlFor="ssc-passing-year" className="text-sm mb-1 block">SSC passing year</label>
                            <Field type="text" name="sscPassingYear" id="ssc-passing-year" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                            <ErrorMessage
                                name="sscPassingYear"
                                component="p"
                                className="text-[0.7rem] text-red-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="ssc-point" className="text-sm mb-1 block">SSC point/GPA</label>
                            <Field type="text" name="sscPoint" id="ssc-point" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                            <ErrorMessage
                                name="sscPoint"
                                component="p"
                                className="text-[0.7rem] text-red-500"
                            />
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center gap-2">
                        <div className="mt-3">
                            <label htmlFor="ssc-roll" className="text-sm mb-1 block">SSC roll number</label>
                            <Field type="text" name="sscRoll" id="ssc-roll" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                            <ErrorMessage
                                name="sscRoll"
                                component="p"
                                className="text-[0.7rem] text-red-500"
                            />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="ssc-board" className="text-sm mb-1 block">SSC Board</label>
                            <Field type="text" name="sscBoard" id="ssc-board" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                            <ErrorMessage
                                name="sscBoard"
                                component="p"
                                className="text-[0.7rem] text-red-500"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">HSC result information</h3>
                    <div className="flex items-stretch justify-center gap-2">
                        <div>
                            <label htmlFor="hsc-passing-year" className="text-sm mb-1 block">HSC passing year</label>
                            <Field type="text" name="hscPassingYear" id="hsc-passing-year" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                            <ErrorMessage
                                name="hscPassingYear"
                                component="p"
                                className="text-[0.7rem] text-red-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="hsc-point" className="text-sm mb-1 block">HSC point/GPA</label>
                            <Field type="text" name="hscPoint" id="hsc-point" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                            <ErrorMessage
                                name="hscPoint"
                                component="p"
                                className="text-[0.7rem] text-red-500"
                            />
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center gap-2">
                        <div className="mt-3">
                            <label htmlFor="hsc-roll" className="text-sm mb-1 block">HSC roll number</label>
                            <Field type="text" name="hscRoll" id="hsc-roll" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                            <ErrorMessage
                                name="hscRoll"
                                component="p"
                                className="text-[0.7rem] text-red-500"
                            />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="hsc-board" className="text-sm mb-1 block">HSC Board</label>
                            <Field type="text" name="hscBoard" id="hsc-board" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                            <ErrorMessage
                                name="hscBoard"
                                component="p"
                                className="text-[0.7rem] text-red-500"
                            />
                        </div>
                    </div>
                </div>
                <PrevToNext 
                    formValues={values} 
                    validationSchema={validationSchema}
                    validateForm={validateForm}
                />
              </Form>
            )
          }
        </Formik>
    </>
  );
}

