
import React, { useState } from "react";
import { Link, Input } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as z from "zod"
import { socialMediaAuth, emailAuth } from "../../service/authModule";

// import socialMediaAuth from "../../service/auth";

const schema = z.object({
    email: z.string().email().nonempty()

})

const Signup = () => {
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({});

    const navigate = useNavigate()

    const fsocialMediaAuth = async (provider, cridential) => {
        const user = await socialMediaAuth(provider, cridential)
        console.log(user)
    }

    const fEmailAuth = async (mode, cridential) => {
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
            navigate("/dashboard")
        } catch (e) {
            alert("not registered user")
        }
    }

    return (
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 min-h-[1021px] max-md:px-5 max-md:max-w-full">
            <img
                alt="a"
                loading="lazy"
                src="https://c.animaapp.com/lcPf2H2l/img/group-5.png"
                className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative justify-center items-center px-16 py-12 mt-20 mb-12 max-w-full bg-white rounded-3xl w-[800px] max-md:px-5 max-md:my-10">
                <div className="flex flex-col items-center mt-4 mb-4 max-w-full w-[434px]">
                    <div className="self-stretch text-3xl font-bold text-center text-black uppercase max-md:max-w-full">
                        Connect, Share and Play
                    </div>
                    <img
                        alt="a"
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/35f77f1aa03dfb6aa8be851fe75f91d49811436b6ad2e9b422d6a2ec14d9dbf7?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/35f77f1aa03dfb6aa8be851fe75f91d49811436b6ad2e9b422d6a2ec14d9dbf7?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35f77f1aa03dfb6aa8be851fe75f91d49811436b6ad2e9b422d6a2ec14d9dbf7?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/35f77f1aa03dfb6aa8be851fe75f91d49811436b6ad2e9b422d6a2ec14d9dbf7?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/35f77f1aa03dfb6aa8be851fe75f91d49811436b6ad2e9b422d6a2ec14d9dbf7?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/35f77f1aa03dfb6aa8be851fe75f91d49811436b6ad2e9b422d6a2ec14d9dbf7?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/35f77f1aa03dfb6aa8be851fe75f91d49811436b6ad2e9b422d6a2ec14d9dbf7?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/35f77f1aa03dfb6aa8be851fe75f91d49811436b6ad2e9b422d6a2ec14d9dbf7?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&"
                        className="mt-8 aspect-square w-[72px]"
                    />
                    <div className="mt-6 text-3xl font-semibold leading-10 text-center text-gray-900 whitespace-nowrap">
                        Create an account
                    </div>
                    <div className="flex gap-3 justify-center px-20 py-2.5 mt-8 max-w-full font-semibold whitespace-nowrap bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)] text-slate-700 w-[360px] max-md:px-5">
                        <img
                            alt="a"
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bf5df6c2dd8d018dc645288bee7103761f905b8d2d558d4c65009eb98a7c274?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&"
                            className="w-6 aspect-square"
                        />
                        <div className="grow" onClick={() => fsocialMediaAuth("google")}>Sign up with Google</div>
                    </div>
                    <div className="flex gap-3 justify-center px-20 py-2.5 mt-3 max-w-full font-semibold whitespace-nowrap bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)] text-slate-700 w-[360px] max-md:px-5">
                        <img
                            alt="a"
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bba7e34065588d12a3372b378b362ab877c49802fc1c9550a10488d93c0f230e?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&"
                            className="w-6 aspect-square"
                        />
                        <div className="grow" onClick={() => fsocialMediaAuth("facebook")}>Sign up with Facebook</div>
                    </div>
                    <div className="flex gap-3 justify-center px-20 py-2.5 mt-3 max-w-full font-semibold whitespace-nowrap bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)] text-slate-700 w-[360px] max-md:px-5">
                        <img
                            alt="a"
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4db0009e21a2fda657e720443dfc25e25f3c3ba5ad628f67c39295d2d42e27c?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&"
                            className="w-6 aspect-square"
                        />
                        <div className="grow" onClick={() => fsocialMediaAuth("github")}>Sign up with Apple</div>
                    </div>
                    <div className="flex gap-2 items-center mt-8 max-w-full text-sm font-medium leading-5 text-center text-slate-600 w-[360px]">
                        <div className="self-stretch my-auto h-px bg-gray-200 w-[100px]" />
                        <div className="flex-auto self-stretch">Or continue with email</div>
                        <div className="self-stretch my-auto h-px bg-gray-200 w-[100px]" />
                    </div>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" className="justify-center px-3.5 py-2.5 mt-8 max-w-full text-gray-500 whitespace-nowrap bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)] text-ellipsis w-[360px]" />
                    {errors.email && <p className="text-red-600 mt-1">{errors.email}</p>}
                    <div onClick={() => fEmailAuth("signin", {email:email})} className="hover:cursor-pointer justify-center items-center px-16 py-2.5 mt-4 max-w-full font-semibold text-white text-center whitespace-nowrap bg-blue-700 rounded-lg border border-solid shadow-sm border-[color:var(--Brand-600,#7F56D9)] w-[360px] max-md:px-5">
                        Get started
                    </div>
                    <div className="flex gap-1 justify-center px-20 mt-8 max-w-full text-sm leading-5 whitespace-nowrap w-[360px] max-md:px-5">
                        <div className="grow text-slate-600">Already have an account?</div>
                        <Link to="/signup"><div className="font-semibold text-blue-700">Log in</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup