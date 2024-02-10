import * as React from "react";

const Footer = (props) => {
  return (
    <div className="flex flex-col justify-center items-center px-20 py-6 text-base text-white whitespace-nowrap bg-blue-700 max-md:px-5">
      <div className="flex gap-3 text-center leading-[131%]">
        <img
          loading="lazy"
          alt=""
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e0974acc44f586659bd5faaa5446aed221febfd6ad6bac9bf22da980239fa642?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0974acc44f586659bd5faaa5446aed221febfd6ad6bac9bf22da980239fa642?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0974acc44f586659bd5faaa5446aed221febfd6ad6bac9bf22da980239fa642?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0974acc44f586659bd5faaa5446aed221febfd6ad6bac9bf22da980239fa642?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0974acc44f586659bd5faaa5446aed221febfd6ad6bac9bf22da980239fa642?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0974acc44f586659bd5faaa5446aed221febfd6ad6bac9bf22da980239fa642?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0974acc44f586659bd5faaa5446aed221febfd6ad6bac9bf22da980239fa642?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0974acc44f586659bd5faaa5446aed221febfd6ad6bac9bf22da980239fa642?apiKey=7c689f0b9cd241009ccaf5bb7b938aba&"
          className="my-auto aspect-square w-[13px]"
        />
        <div className="grow">© 2024 SPOPEER ALL RIGHTS RESERVED</div>
      </div>
      <div className="flex gap-3 max-md:flex-wrap max-md:max-w-full text-center">
        <div className="grow justify-center pr-5 pl-2 border-r-2 border-solid border-r-green-300">
          About us
        </div>
        <div className="justify-center pr-5 pl-2 border-r-2 border-solid aspect-[3] border-r-green-300">
          Help
        </div>
        <div className="grow justify-center pr-5 pl-2 border-r-2 border-solid border-r-green-300">
          Privacy policy
        </div>
        <div className="grow">Terms and Conditions</div>
      </div>
    </div>
  );
}

export default Footer