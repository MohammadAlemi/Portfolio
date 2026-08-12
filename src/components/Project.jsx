import React from "react";

const Project = (props) => {
  return (
    <div className="h-[400px] bg-[#121419] flex flex-col  gap-2 pb-[10px]  rounded-2xl border-1 border-[#ffffff28] hover:border-[#046a8f] transition-all duration-300 cursor-pointer overflow-hidden">
        <img src={props.image} alt="" className="max-h-[200px] rounded-t-lg" />
      <div className="pl-[10px] flex flex-col gap-2 pt-[20px]">
        <h1 className="font-bold">{props.name}</h1>
        <p className="text-[14px] text-gray-400">{props.desc}</p>
      </div>
    </div>
  );
};

export default Project;
