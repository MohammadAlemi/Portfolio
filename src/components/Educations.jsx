import React from 'react'
import Education from './Education'

const Educations = () => {
    const education=[
        {title:"Bachelor in Computer Science (BCS)", school:"Salam University", place:"Kabul, Afghanistan" ,date:"2024 - 2028"},
        {title:"12th Grade Certification", school:"Zukur Wahdat High School", place:"Kabul, Afghanistan" ,date:"2023"},
        // {title:"", university:"", place:"" ,date:""}
    ]
  return (
    <div id='educations' className='min-h-[40vh] bg-gradient-to-b from-[#0A1F44] to-[#121212] text-white px-[20px] lg:px-[150px] py-6 md:pt-[150px] pt-[80px] flex flex-col '>

        <h1 className='text-white text-[30px] md:text-[42px] font-bold text-center '>Education</h1>
        <div className='grid md:grid-cols-2 gap-x-[40px] gap-y-4 pt-10'>
            {
                education.map((item,index)=>(

                    <Education
                        key={index}
                        title={item.title}
                        school={item.school}
                        place={item.place}
                        date={item.date}
                    />
                ))
            }
        </div>
      
    </div>
  )
}

export default Educations
