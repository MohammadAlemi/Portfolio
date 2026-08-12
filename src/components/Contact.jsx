import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { LuSend } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
const Contact = () => {
  const [result, setResult] = useState("");
  const [formData,setFormData]=useState({
    fullName:"",
    email:"",
    phone:"",
    subject:"",
    message:"",
  })
  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    access_key: "364d09e9-9904-439f-80b4-5d455093837e",
    name: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    message: formData.message,
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Failed to send message.");
  }
};


  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({
      ...formData,[name]:value,
    })
  }





  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#121212] to-[#0A1F44] text-white px-[20px] lg:px-[150px] py-6 md:pt-[120px] pt-[80px] flex flex-col pb-20"
      id="contact"
    >
      <h1 className="text-white text-[30px] md:text-[42px] font-bold text-center ">
        Contact Me
      </h1>
      <div className="flex md:flex-row flex-col lg:gap-14 gap-5 pt-5 justify-center">
        <div className="md:w-[48%] shadow-2xl border-1 border-[rgba(255,255,255,0.1)] rounded-2xl p-8">
          <h1 className="text-[20px] font-black">Connect With Me</h1>
          <p className="text-[16px] text-gray-400 py-3 text-justify">
            Have a project in mind or looking for a developer to bring your
            ideas to life? Feel free to reach out. I’m always open to discussing
            new projects, opportunities, and collaborations.
          </p>
          <div className="flex flex-col gap-5">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-[#0088b92d] p-2 rounded-md"><FaRegEnvelope className="text-[#0088b9] text-[18px] " /></div>
              <div className="">
                <h1 className="text-[14px] font-bold">Email</h1>
                <a
                  className="md:text-[16px] text-[14px] text-[#0088b9] font-bold"
                  href="mohammadalemi1403@outlook.com"
                  target="_blank"
                >
                  mohammadalemi1403@outlook.com
                </a>
              </div>
            </div>
            {/* Whatsapp */}
            <div className="flex items-center gap-4">
              <div className="bg-[#0088b92d] p-2 rounded-md"><FaWhatsapp className="text-[#0088b9] text-[18px] " /></div>
              
              <div>
                <h1 className="text-[14px] font-bold">Whatsapp</h1>
                <a className="md:text-[16px] text-[14px] text-[#0088b9] font-bold" href="https://wa.me/93728566012" target="_blank">+93 728 566 012</a>
              </div>
            </div>
            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="bg-[#0088b92d] p-2 rounded-md"><IoLocationOutline className="text-[#0088b9] text-[20px] " /></div>
              <div>
                <h1 className="text-[14px] font-bold">Address</h1>
                <p className="md:text-[16px] text-[14px] text-gray-400 font-bold">Kabul, Afghanistan</p>
              </div>
            </div>
            {/* Telegram */}
            <div className="flex items-center gap-4">
              <div className="bg-[#0088b92d] p-2 rounded-md"><FaTelegramPlane className="text-[#0088b9] text-[18px] " /></div>
              <div>
                <h1 className="text-[14px] font-bold">Telegram</h1>
                <a className="md:text-[16px] text-[14px] text-[#0088b9] font-bold" href="https://t.me/Mohammed_Alemi" target="_blank">
                  @Mohammed_Alemi
                </a>
              </div>
            </div>
          </div>
          {/* social media */}
          <div className="md:pt-55 pt-10">
            <h1 className="text-[14px] font-bold border-t-1 border-[rgba(255,255,255,0.1)] py-3">Follow Me</h1>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1957TaSKtT/?mibextid=wwXIfr" className="bg-[#0088b92d] p-2 rounded-md" target="_blank"><FaFacebookF className="text-[#0088b9] text-[18px] " /></a>
              <a href="https://www.linkedin.com/in/mohammad-alemi-af/" className="bg-[#0088b92d] p-2 rounded-md" target="_blank"><FaLinkedinIn className="text-[#0088b9] text-[18px] " /></a>
              <a href="https://www.instagram.com/mohammad_alemi__" className="bg-[#0088b92d] p-2 rounded-md"><FaInstagram className="text-[#0088b9] text-[18px] " target="_blank" /></a>
              <a href="https://github.com/MohammadAlemi" className="bg-[#0088b92d] p-2 rounded-md"><FiGithub className="text-[#0088b9] text-[18px] " target="_blank" /></a>
              <a href="https://t.me/Mohammed_Alemi" className="bg-[#0088b92d] p-2 rounded-md"><FaTelegramPlane className="text-[#0088b9] text-[18px] " target="_blank" /></a>

              
            </div>
          </div>
        </div>
        {/* form */}
        <form onSubmit={handleSubmit}  className="md:w-[48%] shadow-2xl border-1 border-[rgba(255,255,255,0.1)] rounded-2xl p-8 flex flex-col gap-5 ">
          <h1 className="text-[20px] font-black">Send Me Message</h1>
          {/* name */}
          <div className="flex flex-col gap-1">
            <h1 className="text-[14px] font-bold">Full Name</h1>
            <div className="flex items-center">
              <FiUser className="text-[18px] ml-2 text-gray-400" />
              <input required name="fullName" value={formData.fullName} onChange={handleChange} className="w-full rounded-md border-1 border-[rgba(255,255,255,0.1)] py-3 pl-10  ml-[-30px] outline-none focus:border-1 focus:border-[#046a8f] focus:ring-[#046a8f] focus:ring" type="text" placeholder="Enter Your Name" />
            </div>
          </div>
          {/* email */}
          <div className="flex flex-col gap-1">
            <h1 className="text-[14px] font-bold">Email Address</h1>
            <div className="flex items-center">
              <FaRegEnvelope className="text-[18px] ml-2 text-gray-400"  />
              <input required name="email" value={formData.email} onChange={handleChange} className="w-full rounded-md border-1 border-[rgba(255,255,255,0.1)] py-3 pl-10  ml-[-30px] outline-none focus:border-1 focus:border-[#046a8f] focus:ring-[#046a8f] focus:ring"  type="email" placeholder="Enter Your Email" />
            </div>
          </div>
          {/* phone */}
          <div className="flex flex-col gap-1">
            <h1 className="text-[14px] font-bold">
              Phone Number <span className="font-light text-gray-400">(Optional)</span>
            </h1>
            <div className="flex items-center">
              <FiPhone className="text-[18px] ml-2 text-gray-400"   />
              <input name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-md border-1 border-[rgba(255,255,255,0.1)] py-3 pl-10  ml-[-30px] outline-none focus:border-1 focus:border-[#046a8f] focus:ring-[#046a8f] focus:ring"   type="text" placeholder="Enter Your Phone Number" />
            </div>
          </div>
          {/* subject */}
          <div className="flex flex-col gap-1">
            <h1 className="text-[14px] font-bold">Subject</h1>
            <div className="flex items-center">
              <CgFileDocument className="text-[18px] ml-2 text-gray-400"    />
              <input required name="subject" value={formData.subject} onChange={handleChange} className="w-full rounded-md border-1 border-[rgba(255,255,255,0.1)] py-3 pl-10  ml-[-30px] outline-none focus:border-1 focus:border-[#046a8f] focus:ring-[#046a8f] focus:ring"  type="text" placeholder="subject" />
            </div>
          </div>
          {/* message */}
          <div className="flex flex-col gap-1">
            <h1 className="text-[14px] font-bold">Message</h1>
            <div className="flex ">
              <FiMessageSquare  className="text-[18px] ml-2 mt-4 text-gray-400 mt-3"     />
              <textarea required name="message" value={formData.message} onChange={handleChange}  className="w-full resize-none rounded-md border-1 border-[rgba(255,255,255,0.1)] py-3 pl-10  ml-[-30px] outline-none focus:border-1 focus:border-[#046a8f] focus:ring-[#046a8f] focus:ring" rows="5" type="text" placeholder="Enter Your Message" />
            </div>
          </div>
          <button type="submit" className=" hover:bg-[#046a8f] flex items-center justify-center py-3 gap-1 bg-[#0088b9] rounded-xl cursor-pointer">
            <LuSend className="text-[18px]" /> <span className="font-bold text-[17px]">Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
