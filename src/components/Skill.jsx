import React from 'react'

const Skill = (props) => {

  return (
    <div  className='bg-[#121419] flex flex-col justify-center items-center py-[30px]  rounded-2xl border-1 border-[#ffffff28] hover:border-[#046a8f] transition-all duration-300'>
      <img src={props.icon} alt="" className='w-[32px]' />
      <p>{props.title}</p>
    </div>
  )
}

export default Skill
