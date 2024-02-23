
import React, { useState } from "react";
import { Link, Input } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as z from "zod"
import { emailAuth } from "../../service/authModule";

// import socialMediaAuth from "../../service/auth";

const schema = z.object({
    email: z.string().email().nonempty()

})

const Signup = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({});

    const signupAction = async (mode, cridential) => {
        try {
            schema.parse(cridential)
        } catch (error) {
            let oerrors = {};
            error.errors.forEach((err) => {
                oerrors = { ...oerrors, [err.path.join("")]: err.message };
            });

            setErrors(oerrors);
            return;
        }

        try {
            const user = await emailAuth(mode, cridential)
            navigate("/signin")
        } catch (e) {
            alert("Failed to register")
        }
    }

    return (
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 min-h-[1024px] max-md:px-5 max-md:max-w-full">
            <img
                alt="a"
                loading="lazy"
                src="https://c.animaapp.com/lcPf2H2l/img/group-5.png"
                className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative justify-center items-center px-16 py-12 mt-20 mb-14 max-w-full bg-white rounded-3xl w-[800px] max-md:px-5 max-md:my-10">
                <div className="flex flex-col items-center mt-28 mb-20 max-w-full w-[434px] max-md:my-10">
                    <div className="self-stretch text-3xl font-bold text-center text-black uppercase max-md:max-w-full">
                        Connect, Share and Play
                    </div>
                    <img
                        alt="a"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1acd172c33d7a4878a34b8ff09ffb73174a6c703b0d572f8e9aeaa4f81b5ea58?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1acd172c33d7a4878a34b8ff09ffb73174a6c703b0d572f8e9aeaa4f81b5ea58?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1acd172c33d7a4878a34b8ff09ffb73174a6c703b0d572f8e9aeaa4f81b5ea58?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1acd172c33d7a4878a34b8ff09ffb73174a6c703b0d572f8e9aeaa4f81b5ea58?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1acd172c33d7a4878a34b8ff09ffb73174a6c703b0d572f8e9aeaa4f81b5ea58?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1acd172c33d7a4878a34b8ff09ffb73174a6c703b0d572f8e9aeaa4f81b5ea58?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1acd172c33d7a4878a34b8ff09ffb73174a6c703b0d572f8e9aeaa4f81b5ea58?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1acd172c33d7a4878a34b8ff09ffb73174a6c703b0d572f8e9aeaa4f81b5ea58?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&"
                        className="mt-8 w-14 aspect-square"
                    />
                    <div className="mt-6 text-3xl font-semibold leading-10 text-center text-gray-900 whitespace-nowrap">
                        Sign in account
                    </div>
                    <input placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="justify-center px-3.5 py-2.5 mt-8 max-w-full text-gray-500 whitespace-nowrap bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)] text-ellipsis w-[360px]" />
                    {/* <div className="justify-center px-3.5 py-2.5 mt-4 max-w-full text-gray-500 whitespace-nowrap bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)] text-ellipsis w-[360px]">
                        Confirm password
                    </div> */}
                    {errors.email && <p className="text-red-600 mt-1">{errors.email}</p>}
                    <div onClick={() => signupAction("signup", { email: email })} className="hover:cursor-pointer text-center justify-center items-center px-16 py-2.5 mt-4 max-w-full font-semibold text-white whitespace-nowrap bg-blue-700 rounded-lg border border-solid shadow-sm border-[color:var(--Brand-600,#7F56D9)] w-[360px] max-md:px-5">
                        Continue
                    </div>
                    <div className="flex gap-1 justify-center px-20 mt-8 max-w-full text-sm leading-5 whitespace-nowrap w-[360px] max-md:px-5">
                        <div className="grow text-slate-600">
                            Already have an account?
                        </div>
                        <Link to="/signin" className="font-semibold text-blue-700">Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup