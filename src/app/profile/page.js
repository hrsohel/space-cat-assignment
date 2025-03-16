"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [userData, setUserData] = useState({})
  useEffect(() => {
    let userInfo
    const storageData = localStorage.getItem("userInfo")
    if(storageData) {
      userInfo = JSON.parse(storageData)
      setUserData(userInfo)
    }
  }, [])
  return (
    <>
      <div style={{background: 'linear-gradient(45deg, blue -70%, purple)'}} className='min-h-screen flex items-center justify-center p-2'>
        <div className='bg-white p-4 rounded-md md:w-[35rem] w-full'>
          <div className=''>
            <div className='w-[10rem] h-[10rem] rounded-full mx-auto'>
              <Image src={userData?.file || "/Pasted image.png"} alt='profile pic' width="1000" height="1000" 
              className='w-full h-full object-cover rounded-full'
              />
            </div>
            <h1 className='text-xl capitalize text-center mt-3'>{userData?.fname} {userData?.lname}</h1>
            <div className='my-4 text-center'>
              <p>&#127758; {userData?.street}, {userData?.postOffice}, {userData?.policeStation}, {userData?.city}</p>
              <p>&#127874; {userData?.dob}</p>
            </div>
          </div>
          <div>
            <h1 className='text-xl'>SSC information</h1>
            <hr />
            <div className='mt-4 flex items-center justify-between'>
              <p>GPA</p>
              <p>{userData?.sscPoint}</p>
            </div>
            <div className='flex items-center justify-between'>
              <p>SSC Roll</p>
              <p>{userData?.sscRoll}</p>
            </div>
            <div className='flex items-center justify-between'>
              <p>SSC Board</p>
              <p>{userData?.sscBoard}</p>
            </div>
            <div className='flex items-center justify-between'>
              <p>Passing year</p>
              <p>{userData?.sscPassingYear}</p>
            </div>
            <div className='my-4'></div>
            <h1 className='text-xl'>HSC information</h1>
            <hr />
            <div className='mt-4 flex items-center justify-between'>
              <p>GPA</p>
              <p>{userData?.hscPoint}</p>
            </div>
            <div className='flex items-center justify-between'>
              <p>HSC Roll</p>
              <p>{userData?.hscRoll}</p>
            </div>
            <div className='flex items-center justify-between'>
              <p>HSC Board</p>
              <p>{userData?.hscBoard}</p>
            </div>
            <div className='flex items-center justify-between'>
              <p>Passing year</p>
              <p>{userData?.hscPassingYear}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
