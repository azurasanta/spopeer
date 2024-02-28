import React, { useState } from "react";
import { Link, Input, useNavigate } from "react-router-dom";

export const EmailVerify = (props) => {
    const [code, setCode] = useState(['', '', '', '']);

    const handleInputChange = (index, value) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
    };

    const handleSubmit = () => {
        const combinedCode = code.join('');
        if (combinedCode.length < 4) return
        console.log('Verification code:', combinedCode);
        // Here you can add logic to submit the code for verification
    };

    return (
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 min-h-[1024px] max-md:px-5 max-md:max-w-full">
            <img
                alt="a"
                loading="lazy"
                src="https://c.animaapp.com/lcPf2H2l/img/group-5.png"
                className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative justify-center items-center px-16 py-12 mt-20 mb-14 max-w-full bg-white rounded-3xl w-[800px] max-md:px-5 max-md:my-10">
                <div className="flex flex-col items-center mt-20 mb-12 max-w-full w-[434px] max-md:my-10">
                    <div className="self-stretch text-3xl font-bold leading-10 text-center text-black uppercase max-md:max-w-full">
                        Connect, Share and Play
                    </div>
                    <img
                        alt="a"
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1d01e2c1dad4e116fd5ec8e1042040cbda56998036f28d488ebc9e4dc23afc8?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&"
                        className="mt-8 w-14 shadow-sm aspect-square"
                    />
                    <div className="mt-6 text-3xl font-semibold leading-10 text-center text-gray-900 whitespace-nowrap">
                        Check your email
                    </div>
                    <div className="mt-3 text-base font-medium leading-6 text-center whitespace-nowrap text-slate-600">
                        We sent a verification link to Your email
                    </div>
                    <div className="flex flex-row gap-3 px-0.5 mt-8 max-w-full w-[360px]">
                        {
                            code.map((v, i) => (
                                <input key={i}
                                    type="text"
                                    value={v}
                                    maxLength="1"
                                    onChange={(e) => { handleInputChange(i, e.target.value) }}
                                    className="w-1/4 shrink-0 min-h-20 h-20 bg-white rounded-xl border-2 border-blue-700 border-solid shadow-sm" />
                            ))
                        }
                    </div>
                    <div onClick={handleSubmit} className="hover:cursor-pointer justify-center items-center text-center px-16 py-2.5 mt-8 max-w-full text-base font-semibold leading-6 text-white whitespace-nowrap bg-blue-700 rounded-lg border border-solid shadow-sm border-[color:var(--Brand-600,#7F56D9)] w-[360px] max-md:px-5">
                        Verify email
                    </div>
                    <div className="flex max-sm:flex-col gap-1 justify-center items-center px-12 mt-8 max-w-full text-sm leading-5 whitespace-nowrap w-[360px] max-md:px-5">
                        <div className="grow text-slate-600">
                            Didn’t receive the email?
                        </div>
                        <div className="hover:cursor-pointer grow font-semibold text-blue-700">
                            Click to resend
                        </div>
                    </div>
                    <div className="flex gap-1.5 justify-center mt-8 text-sm font-semibold leading-5 whitespace-nowrap text-slate-600">
                        <img
                            alt="a"
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c89f893f72be2526b6fb77f2d7c4fe966cf69d71985e202226b0dbf10cc8b78c?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&"
                            className="w-5 aspect-square"
                        />
                        <Link to="/signin" className="grow">Back to log in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}