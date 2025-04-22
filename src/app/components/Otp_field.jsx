'use client'
import React, { useEffect, useRef, useState } from 'react'
function Otp_field({ length, onOtpSubmit }) {
  const [otp, setotp] = useState(new Array(length).fill(""));
  const Inputref = useRef([]);
  useEffect(() => {
    if (Inputref.current[0]) {
      Inputref.current[0].focus();
    }
  }, [])
  const handleChange = (index, e) => {
    const val = e.target.value;
    const newotp = [...otp];
    if (isNaN(val)) {
      return;
    }
    newotp[index] = val.substring(val.length - 1);
    setotp(newotp);
    const combinedotp = newotp.join("");
    if (combinedotp.length == length) {
      onOtpSubmit(combinedotp);
    }
    if (val && index < length - 1 && Inputref.current[index + 1]) {
      Inputref.current[index + 1].focus();
    }
  }
  const handleKeyDown = (index, e) => {
    if (e.key == "Backspace" && !otp[index] && Inputref.current[index - 1] && index > 0) {
      Inputref.current[index - 1].focus();
    }
  }
  const handleClick = (index) => {
    Inputref.current[index].setSelectionRange(1, 1);
  }
  return (
    <>
      <div className='h-full w-full rounded-md flex items-center justify-evenly'>
        {otp.map((value, index) => {
          return <input className='h-15 w-15 rounded-lg bg-white text-black p-4 text-2xl font-medium border-2 border-blacks' type="text" key={index}
            ref={(input) => Inputref.current[index] = input}
            onChange={(e) => {
              handleChange(index, e);
            }}
            onClick={(e) => {
              handleClick(index);
            }}
            onKeyDown={(e) => {
              handleKeyDown(index, e);
            }}
            value={value}
          />
        })}
      </div>
    </>
  )
}

export default Otp_field
