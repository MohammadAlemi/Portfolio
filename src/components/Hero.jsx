import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import myImg from '../assets/myPhoto.png'
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import cv from "../../public/cv3.pdf"
const Hero = () => {
  return (
    <div id='home' className='min-h-[100vh] bg-gradient-to-b from-[#0A1F44] to-[#121212] flex px-[20px] lg:px-[150px] flex-col-reverse lg:flex-row md:justify-end md:gap-14 lg:gap-0'>
        {/* left */}
        <section className='flex flex-col lg:pt-[220px] lg:w-[50%] w-[100%]'>
            <h1 className='text-white lg:text-[42px] md:text-[30px] text-[20px] text-center lg:text-left font-bold pt-4 '>Hi, I'm Mohammad Alemi</h1>
            <h1 className='text-[#38BDF8] text-[26px] font-semibold mt-4'>
            I am a{" "}
            <TypeAnimation
                sequence={[
                "React Developer",
                2000,
                "Laravel Developer",
                2000,
                "Full Stack Developer",
                2000,
                ]}
                speed={50}
                repeat={Infinity}
            />
            </h1>
            <p className='text-[#94A3B8] md:text-[18px] font-normal mt-6 text-justify'>Computer Science student and web developer passionate about building interactive websites and applications using React, Laravel, and modern web technologies.
I enjoy solving problems, learning new technologies, and building real-world projects that improve my development skills. My goal is to become a skilled full-stack developer and create impactful digital solutions.</p>
            <div className='flex md:flex-row flex-col mt-12 gap-5 md:justify-center lg:justify-start  text-white'>
                <a href="#projects" className='bg-[#0088b9] px-10 py-4 rounded-4xl   hover:bg-[#046a8f] cursor-pointer transition duration-300 flex items-center justify-between gap-3'>View Projects<FaArrowRightLong /></a>
                <a href={cv} download={cv} className='bg-[#0088b9] px-10 py-4 rounded-4xl   hover:bg-[#046a8f] cursor-pointer transition duration-300 flex items-center justify-between gap-3' >Download CV <FaCircleArrowDown /></a>
            </div>
        </section>
        {/* right */}
        <section className='flex flex-col lg:w-[50%] w-[100%] items-center'>     
            <div className="relative flex justify-center items-center lg:pt-[220px] pt-[100px] md:pt-[200px]">
                <div className="absolute w-80 h-80 rounded-full bg-sky-400 blur-3xl opacity-30"></div>
                <img src={myImg} alt="Mohammad Alemi" className="relative w-90 h-90  object-cover rounded-full border-4 border-sky-400"/>
            </div>
        </section>
    </div>
  )
}

export default Hero
