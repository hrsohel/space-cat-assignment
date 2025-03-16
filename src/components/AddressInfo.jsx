"use client"
import Image from "next/image";
import {Formik, Form, Field, ErrorMessage} from "formik"
import PrevToNext from "./PrevToNext";
import * as Yup from "yup";
import { useSelector } from "react-redux";

export default function AddressInfo() {
  const formData = useSelector(state => state.addressInfoSlice.formData)
  const SignupSchema = Yup.object().shape({
    pPoliceStation: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Police station is required"),
    pPostOffice: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Post office is required"),
    pCity: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("City of birth is required"),
    pStreet: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Street is required"),
    street: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Street is required"),
    city: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("City is required"),
    postOffice: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Post office is required"),
    policeStation: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Police station is required"),
  });
  return (
    <>
      <Formik
        initialValues={{
          street: formData.street || "",
          city: formData.city || "",
          postOffice: formData.postOffice || "",
          policeStation: formData.policeStation || "",
          pPostOffice: formData.pPostOffice || "",
          pPoliceStation: formData.pPoliceStation || "",
          pCity: formData.pCity || "",
          pStreet: formData.pStreet || ""
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
                  <li className="w-[1rem] h-[1rem] rounded-full border-2 border-blue-700"></li>
                </ul>
                <h2 className="text-lg text-center my-3 border-b-[1px] border-blue-700">Address Information</h2>
                
                <div>
                    <h3 className="text-lg font-semibold mb-2">Present Address</h3>
                    <div className="flex items-stretch justify-center gap-2">
                    <div>
                        <label htmlFor="street" className="text-sm mb-1 block">Street/Village/Holding</label>
                        <Field type="text" name="street" id="street" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                        <ErrorMessage
                          name="street"
                          component="p"
                          className="text-[0.7rem] text-red-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="city" className="text-sm mb-1 block">City</label>
                        <Field type="text" name="city" id="city" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                        <ErrorMessage
                          name="city"
                          component="p"
                          className="text-[0.7rem] text-red-500"
                        />
                    </div>
                    </div>
                    <div className="flex items-stretch justify-center gap-2">
                        <div className="mt-3">
                            <label htmlFor="post-office" className="text-sm mb-1 block">Post office</label>
                            <Field type="text" name="postOffice" id="post-office" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                            <ErrorMessage
                              name="postOffice"
                              component="p"
                              className="text-[0.7rem] text-red-500"
                            />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="police-station" className="text-sm mb-1 block">Police station</label>
                            <Field type="text" name="policeStation" id="police-station" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                            <ErrorMessage
                              name="policeStation"
                              component="p"
                              className="text-[0.7rem] text-red-500"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Permanent Address</h3>
                    <div className="flex items-stretch justify-center gap-2">
                    <div>
                        <label htmlFor="p-street" className="text-sm mb-1 block">Street/Village/Holding</label>
                        <Field type="text" name="pStreet" id="p-street" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                        <ErrorMessage
                          name="pStreet"
                          component="p"
                          className="text-[0.7rem] text-red-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="p-city" className="text-sm mb-1 block">City</label>
                        <Field type="text" name="pCity" id="p-city" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                        <ErrorMessage
                          name="pCity"
                          component="p"
                          className="text-[0.7rem] text-red-500"
                        />
                    </div>
                    </div>
                    <div className="flex items-stretch justify-center gap-2">
                        <div className="mt-3">
                            <label htmlFor="p-post-office" className="text-sm mb-1 block">Post office</label>
                            <Field type="text" name="pPostOffice" id="p-post-office" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                            <ErrorMessage
                              name="pPostOffice"
                              component="p"
                              className="text-[0.7rem] text-red-500"
                            />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="p-police-station" className="text-sm mb-1 block">Police station</label>
                            <Field type="text" name="pPoliceStation" id="p-police-station" className="w-full text-sm py-1 px-2 border-[1px] rounded-sm outline-none" />
                            <ErrorMessage
                              name="pPoliceStation"
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

