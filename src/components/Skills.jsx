import React from 'react'
import html5 from "../assets/html5-original.svg"
import css3 from "../assets/css3-original.svg"
import javascript from "../assets/javascript-original.svg"
import react from "../assets/react-original.svg"
import vite from "../assets/vite.svg"
import git from "../assets/git-original.svg"
import php from "../assets/php-original.svg"
import laravel from "../assets/laravel-original.svg"
import photoshop from "../assets/photoshop-original.svg"
import tailwind from "../assets/tailwindcss-original.svg"
import mysql from "../assets/mysql-original.svg"
import wordpress from "../assets/wordpress-original.svg"
import Skill from "../components/Skill"
const Skills = () => {
  const skill=[
      {title:"HTML5",icon:html5},
      {title:"CSS3",icon:css3},
      {title:"JavaAcript",icon:javascript},
      {title:"React",icon:react},
      {title:"Vite",icon:vite},
      {title:"Git",icon:git},
      {title:"PHP",icon:php},
      {title:"Laravel",icon:laravel},
      {title:"Photoshop",icon:photoshop},
      {title:"Tailwind",icon:tailwind},
      {title:"MySQL",icon:mysql},
      {title:"WordPress",icon:wordpress},
  ]
  return (
    <div id='skills' className='min-h-screen bg-gradient-to-b from-[#0A1F44] to-[#121212] text-white px-[20px]  lg:px-[150px] py-6 lg:pt-[120px] md:pt-[120px] pt-[80px] flex flex-col lg:justify-center '>
      <h1 className='text-white md:text-[42px] text-[30px] font-bold text-center '>My Skills</h1>
      <div className='grid md:grid-cols-4 grid-cols-2 md:gap-x-[40px] gap-x-4 gap-y-4 pt-10'>
        {
      skill.map((item,index)=>(
        
        <Skill
        key={index}
        title={item.title}
        icon={item.icon}
        />
      ))
     }
      </div>
     
    </div>
  )
}

export default Skills
