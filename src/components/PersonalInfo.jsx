"use client"
import Image from "next/image";
import {Formik, Form, Field, ErrorMessage} from "formik"
import PrevToNext from "./PrevToNext";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import useImageHook from "../../hooks/useImageHook";

export default function PersonalInfo() {
  const {onchangeImage, previewImage} = useImageHook()
  const formData = useSelector(state => state.personalInfoSlice.formData)
  const SignupSchema = Yup.object().shape({
    fname: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("First name is required"),
    lname: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Last name is required"),
    dob: Yup.date().required("Date of birth is required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          fname: formData?.fname || "",
          lname: formData?.lname || "",
          dob: formData?.dob || "",
          file: formData?.file || null
        }}
        validationSchema={SignupSchema}
      >
          {
            ({values, validationSchema, validateForm, setFieldValue}) => (
              <Form className="bg-white rounded-md p-3">
                <h1 className="text-center my-2 text-xl">Create Your Account & Unlock Features</h1>
                <ul className="flex items-center justify-around my-3 completion-tracker">
                  <li className="w-[1rem] h-[1rem] bg-blue-700 rounded-full border-2 border-blue-700"></li>
                  <li className="w-[1rem] h-[1rem] rounded-full border-2 border-blue-700"></li>
                  <li className="w-[1rem] h-[1rem] rounded-full border-2 border-blue-700"></li>
                </ul>
                <div className="">
                  <div className="w-[10rem] h-[10rem] rounded-full mx-auto mb-3 relative">
                    <Image src={values.file || previewImage || "/Pasted image.png"} alt="profile pic" width="10000" height="1000" 
                    className="w-full h-full rounded-full object-cover"
                    />
                    <label style={{background: "rbga(0, 0, 0, 0.6)"}} className="text-[1.15rem] px-1 font-semibold absolute top-[70%] left-[80%] bg-slate-400 text-center rounded-sm cursor-pointer" htmlFor="image">&#128247;</label>
                    <input type="file" name="file" id="image" className="hidden" 
                      onChange={(event) => {
                        if(event.target.files?.[0]?.type.split("/")[0] !== "image") {
                          alert("Please select an image type file.")
                          return
                        }
                        const imageURL = onchangeImage(event)
                        setTimeout(() => {
                          setFieldValue("file", imageURL);
                        }, 0);
                      }}
                    />
                    <ErrorMessage 
                      name="image"
                      component="p"
                      className="text-[0.7rem] text-red-500"
                    />
                  </div>
                  <div className="flex items-stretch justify-center gap-2">
                    <div>
                      <label htmlFor="fname" className="text-sm mb-1 block">Enter your first name</label>
                      <Field type="text" name="fname" id="fname" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                      <ErrorMessage
                        name="fname"
                        component="p"
                        className="text-[0.7rem] text-red-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lname" className="text-sm mb-1 block">Enter your last name</label>
                      <Field type="text" name="lname" id="lname" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                      <ErrorMessage
                        name="lname"
                        component="p"
                        className="text-[0.7rem] text-red-500"
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                      <label htmlFor="dob" className="text-sm mb-1 block">Enter your Date of birth</label>
                      <Field type="date" name="dob" id="dob" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                      <ErrorMessage
                        name="dob"
                        component="p"
                        className="text-[0.7rem] text-red-500"
                      />
                  </div>
                </div>
                <PrevToNext 
                formValues={values} 
                validationSchema={validationSchema} 
                validateForm={validateForm}
                previewImage={previewImage}
                />
              </Form>
            )
          }
        </Formik>
    </>
  );
}

