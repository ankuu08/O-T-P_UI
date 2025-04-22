'use client'
import React, { useState } from 'react'
import Otp_field from './components/Otp_field'
function page() {
  const [phonen, setphonen] = useState("");
  const [showotpf, setshowotpf] = useState(false);
  const phonehandler = (e) => {
    setphonen(e.target.value);
  }
  const submithandler = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phonen.length < 10 || regex.test(phonen)) {
      alert("Invalid Phone Number!")
    } else {
      setshowotpf(true);
    }

  }
  const otpsubmit = (otp) => {
    console.log("Otp Submited...", otp);
  }
  return (
    <div className='bg-black h-[100vh] w-full'>
      <h1 className='text-5xl font-bold text-white flex items-center justify-center pt-10 '>OTP Validator</h1>
      <div className='h-[85vh] w-full flex items-center justify-center'>
        <div className='h-1/2 w-[90%] sm:h-1/2  sm:w-1/3 bg-white rounded-md flex items-center justify-evenly'>
          <div className='h-full w-full flex items-center justify-center'>
            {!showotpf ?
              <form action="" onSubmit={(e) => {
                submithandler(e);
              }}>
                <input className=' px-3 py-1.5 text-black rounded-lg font-medium text-lg border-2 border-black ' type="text " placeholder='Enter Mobile Number...' value={phonen} onChange={(e) => {
                  phonehandler(e);
                }} />
                <button className='py-2 px-2 bg-yellow-700 ms-4 rounded-lg text-white font-medium ' type="submit">Submit</button>
              </form>
              : <Otp_field length={4} onOtpSubmit={otpsubmit}></Otp_field>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
