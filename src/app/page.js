"use client"
import PersonalInfo from "@/components/PersonalInfo";
import AddressInfo from "@/components/AddressInfo";
import EducationInfo from "@/components/EducationInfo";
import { useDispatch, useSelector } from "react-redux";
import { resetPersonalData } from "../../redux/slices/personalInfoSlice";
import { resetAddressData } from "../../redux/slices/addressInfoSlice";
import { resetEducationData } from "../../redux/slices/educationInfoSlice";

export default function Home() {
  const stepData = useSelector(state => state?.switchComponents?.counter)
  return (
    <>
      <div style={{background: 'linear-gradient(45deg, blue -70%, purple)'}} 
        className="min-h-screen w-full flex items-center justify-center p-2">
        {
          stepData === 1 ? 
          <PersonalInfo /> : 
          stepData === 2 ? 
          <AddressInfo /> : 
          stepData === 3 ? <EducationInfo /> : 
          <></>
        }
      </div>
    </>
  );
}
