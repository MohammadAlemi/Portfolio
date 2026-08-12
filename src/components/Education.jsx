import React from 'react'

const Education = (props) => {
  return (
    <div id='education' className='  bg-[#121419] flex flex-col justify-center gap-1 py-[30px] pl-[20px]  rounded-2xl border-1 border-[#ffffff28] hover:border-[#046a8f] transition-all duration-300'>
      <h1  className="font-bold">{props.title}</h1>
      <p  className="text-[14px] text-gray-400">{props.school}</p>
      <p  className="text-[14px] text-gray-400"><span>{props.place}</span> <span>{props.date}</span></p>
    </div>
  )
}

export default Education
