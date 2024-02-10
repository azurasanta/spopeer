import React from 'react'

const LeftImageCard = (props) => {
    return (
        <div className="flex max-lg:flex-col-reverse items-center gap-[50px] mt-10 max-lg:mt-32">
            <img
                className="w-[40%] max-lg:w-[80%]"
                alt="Business merger bro"
                src={props.imgSrc}
            />
            <div className="flex flex-col gap-8 max-lg:text-center">
                <div className="[font-family:'Nunito',Helvetica] font-bold text-black text-[45px] tracking-[0] leading-[normal]">
                    {props.title}
                </div>
                <p className="[font-family:'Nunito',Helvetica] font-normal text-black text-[25px] tracking-[0] leading-[normal]">
                    {props.content}
                </p>
            </div>
        </div>
    )
}

export default LeftImageCard