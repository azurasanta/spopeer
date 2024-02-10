import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import RightImageCard from "./RightImageCard";
import LRImageCard from "./LRImageCard";
import LeftImageCard from "./LeftImageCard";

const LandingBoard = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col w-[50%] max-lg:w-[80%] max-md-[90%] mt-[60px] font-[Nunito] text-center">
                    <h1 className="font-[700] text-[45px] leading-[112px] max-md:leading-[60px]">Where Passion Meets Play</h1>
                    <p className="text-center max-md:leading-[28px] [font-family:'Nunito',Helvetica] font-normal text-black text-[25px] tracking-[0] leading-[normal]">Whether you are dedicated to perfecting your game, guiding athletes to success, or fueling the sports industry, we bring your dedication to life, turning your passion into power</p>
                </div>
            </div>
            <div className="w-full mt-14">
                <img
                    loading="lazy"
                    alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7e18fad67d2ebe60d2c241c8db544b8a3f5aa677c933b7311c6dc1e0e874f8b?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&"
                    className="w-full aspect-[5.26]"
                />
            </div>
            <div className="flex justify-center items-center mt-14">
                <div className="flex-col w-[50%] max-lg:w-[80%] max-md-[90%] text-center">
                    <p className="font-[Nunito] font-[400] text-[25px] leading-[34px]">
                        Join us, whether you are an athlete, coach, sports club, or support professional, and thrive together in the world of sports.
                    </p>
                    <div className="mt-4">
                        <button className="rounded-lg border border-[#1637FF] px-[16px] py-[10px] text-[#1637FF]">Get Started
                            <FontAwesomeIcon icon={faArrowRight} className='toggle text-[#white] ml-1' />
                        </button>
                    </div>
                </div>
            </div>
            <LRImageCard>
                <RightImageCard title="Connect" content="Forge Meaningful Bonds in the Sports World" imgSrc="https://c.animaapp.com/5VPQHYOt/img/business-merger-bro.png" />
                <LeftImageCard title="Share" content="Share your knowledge, experiences, skills or victories, we thrive on the power of shared moments. Each contribution enriches the collective journey towards success."
                    imgSrc="https://c.animaapp.com/DCTjnFGX/img/group-2@2x.png" />
                <RightImageCard title="Promote yourself" content="SGhowcasing your unique talents and achievements, connect with like-minded individuals, and open doors to new opportunities. Be the architect of your success" imgSrc="https://c.animaapp.com/5VPQHYOt/img/business-merger-bro.png" />
                <LeftImageCard title="Stay Informed" content="Staying informed is a strategic advantage. Spopeer delivers real-time updates, trends, and insider insights, empowering you to make informed decisions and stay one step ahead in your sports journey."
                    imgSrc="https://c.animaapp.com/DCTjnFGX/img/group-2@2x.png" />
            </LRImageCard>
        </div>
    )
}

export default LandingBoard