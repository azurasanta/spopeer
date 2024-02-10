import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LandingBand = () => {
  return (
    <div className="Frame21 flex flex-col justify-center items-center mt-[50px]">
      <div className="flex Frame9 flex-row max-lg:flex-col p-[8px] text-[50px] justify-center max-lg:items-center">
        <label className="[font-family:'Nunito',Helvetica] font-bold text-[45px] tracking-[0] leading-[112.5px] text-[#007BFF] max-lg:leading-[normal]">Spopeer:</label>
        <label className="[font-family:'Nunito',Helvetica] font-bold text-black text-[45px] tracking-[0] leading-[112.5px] text-center max-lg:leading-[normal]">Your passport to the world of sports!</label>
      </div>
      <div className="Frame10 px-[10] [font-family:'Nunito',Helvetica] font-normal text-black text-[25px] text-center tracking-[0] leading-[52.5px] max-lg:leading-[normal]">
        <h2 className="">Uniting Athletes, Coaches, Sports clubs and Supportive professionals globally.</h2>
        <h2>Connect, share knowledge, and play together in the vibrant world of sports.</h2>
      </div>
      <div className="mt-[30px]">
        <button className="rounded-lg border border-[#66B1FF] px-[16px] py-[10px] bg-[#007BFF] text-white">Get Started
          <FontAwesomeIcon icon={faArrowRight} className='toggle text-[#white] ml-1' />
        </button>
      </div>
    </div>
  )
}

export default LandingBand;