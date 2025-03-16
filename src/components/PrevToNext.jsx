import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { backToPrevious, moveToNext } from '../../redux/slices/swtichComponentsSlice'
import { useFormikContext } from 'formik';
import { loadData, resetPersonalData } from '../../redux/slices/personalInfoSlice';
import { loadAddressData, resetAddressData } from '../../redux/slices/addressInfoSlice';
import { loadEducationData, resetEducationData } from '../../redux/slices/educationInfoSlice';
import { useRouter } from 'next/navigation';
import store from '../../redux/store';

export default function PrevToNext({formValues, validationSchema, validateForm, previewImage}) {
    const { setTouched, setErrors } = useFormikContext();
    const dispatch = useDispatch()
    const stepData = useSelector(state => state?.switchComponents?.counter)
    const personalData = useSelector(state => state.personalInfoSlice.formData)
    const addressData = useSelector(state => state.addressInfoSlice.formData)
    const educationData = useSelector(state => state.educationInfoSlice.formData)
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const handleError = async() => {
        const errors = await validateForm(formValues)
        if(stepData === 1) {
            if(!previewImage && !formValues?.file) {
                alert("Please select an image.")
                return
            }
            else dispatch(loadData({...formValues, file: previewImage || formValues?.file}))
        }
        else if(stepData === 2) dispatch(loadAddressData(formValues))
        else if(stepData === 3) dispatch(loadEducationData(formValues))
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            if(stepData === 1) {
                setTouched({
                    fname: true,
                    lname: true,
                    dob: true
                });
            } else if(stepData === 2) {
                setTouched({
                    street: true,
                    city: true,
                    postOffice: true,
                    policeStation: true,
                    pPostOffice: true,
                    pPoliceStation: true,
                    pCity: true,
                    pStreet: true
                });
            }
            return;
        }
        dispatch(moveToNext())
    }
    const saveData = async () => {
        const errors = await validateForm(formValues)
        dispatch(loadEducationData(formValues))
        if(Object.keys(errors).length > 0) {
            setErrors(errors);
            setTouched({
                sscPassingYear: true,
                sscPoint: true,
                sscRoll: true,
                sscBoard: true,
                hscPassingYear: true,
                hscPoint: true,
                hscRoll: true,
                hscBoard: true
            })
            return
        }
        setLoading(true)
        const educationUpdatedData = store.getState().educationInfoSlice.formData
        const combinedData = {...personalData, ...addressData, ...educationUpdatedData}
        localStorage.setItem("userInfo", JSON.stringify(combinedData))
        router.push("/profile")
    }
  return (
   <>
    <div className="my-3 flex items-center justify-between">
        <button
            onClick={(e) => {
                e.preventDefault()
                dispatch(backToPrevious())
            }}
            style={{background: 'linear-gradient(45deg, blue -70%, purple)'}} 
            className="text-[0.85rem] px-2 py-1 text-white font-semibold rounded-sm hover:opacity-85 cursor-pointer">Previous
        </button>
        {
            stepData === 3 ? <button
            onClick={(e) => {
                e.preventDefault()
                saveData()
            }}
            style={{background: 'linear-gradient(45deg, blue -70%, purple)'}} 
            className="text-[0.85rem] px-2 py-1 text-white font-semibold rounded-sm hover:opacity-85 cursor-pointer">{loading ? "Loading" : "Save"}
        </button> : <button
            onClick={(e) => {
                e.preventDefault()
                handleError()
            }}
            style={{background: 'linear-gradient(45deg, blue -70%, purple)'}} 
            className="text-[0.85rem] px-2 py-1 text-white font-semibold rounded-sm hover:opacity-85 cursor-pointer">Next
        </button>
        }
    </div>
   </>
  )
}
