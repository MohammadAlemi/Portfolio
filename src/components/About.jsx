import React from "react";
import imgmy from "../assets/imgmy.png";
const About = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#121212] to-[#0A1F44] text-white  lg:px-[150px] px-[20px] py-6 md:pt-[120px] pt-[70px] flex flex-col lg:flex-row md:gap-20"
      id="about"
    >
      <section className="lg:w-[70%] ">
        <h1 className="text-white md:text-[42px] text-[30px] font-bold pb-7">
          About
        </h1>
        <div className="relative border-l-1 border-l-[#0088b9] pt-2 pb-5 ">
          <span className=" absolute left-[-3px] top-1 w-3 h-3 rounded-full bg-[#0088b9]"></span>
          <div className=" bg-[#121419] border-1 border-[#ffffff28] px-12 pb-5 rounded-2xl ml-4">
            <p className="text-[#ffffff]  text-[18px] font-normal mt-6 text-justify">
              Hi, I'm Mohammad Alemi, a passionate Web Developer from
              Afghanistan with a strong interest in building modern, responsive,
              and user-friendly websites.
            </p>
          </div>
        </div>

        <div className="relative border-l-1 border-l-[#0088b9] pb-5 pt-2 ">
          <span className=" absolute left-[-3px] top-1 w-3 h-3 rounded-full bg-[#0088b9]"></span>
          <div className=" bg-[#121419] border-1 border-[#ffffff28] px-12 pb-5 rounded-2xl ml-4">
            <p className="text-[#ffffff] text-[18px] font-normal mt-6 text-justify">
              I currently work as a Web Designer while studying Computer
              Science. I enjoy turning ideas into real-world web applications
              using modern technologies.
            </p>
          </div>
        </div>

        <div className="relative border-l-1 border-l-[#0088b9] pb-5 pt-2 ">
          <span className=" absolute left-[-3px] top-1 w-3 h-3 rounded-full bg-[#0088b9]"></span>
          <div className=" bg-[#121419] border-1 border-[#ffffff28] px-12 pb-5 rounded-2xl ml-4">
            <p className="text-[#ffffff]  text-[18px] font-normal mt-6 text-justify">
              My primary focus is React, JavaScript, and Laravel, and I'm
              continuously improving my frontend and backend development skills
              by building practical projects.
            </p>
          </div>
        </div>

        <div className="relative border-l-1 border-l-[#0088b9] pb-2 pt-2 ">
          <span className=" absolute left-[-3px] top-1 w-3 h-3 rounded-full bg-[#0088b9]"></span>
          <div className=" bg-[#121419] border-1 border-[#ffffff28] px-12 pb-5 rounded-2xl ml-4">
            <p className="text-[#ffffff]  text-[18px] font-normal mt-6 text-justify">
              I'm passionate about learning new technologies, solving problems,
              and creating clean, efficient, and responsive user experiences. My
              goal is to become a professional Full Stack Developer and
              contribute to impactful software projects.
            </p>
          </div>
        </div>
      </section>
      <section className="lg:w-[30%] flex justify-center items-center pt-15">
        <img src={imgmy} alt="" className="hidden sm:inline-block max-h-[550px] rounded-3xl" />
      </section>
    </div>
  );
};

export default About;
