import React from "react";
import Nav from "../Components/Layout/Nav";
import LandingBand from "../Components/LandingComponents/LandingBand";
import LandingBoard from "../Components/LandingComponents/LandingBoard"
import Footer from "../Components/Layout/Footer";

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-col bg-cover bg-center bg-no-repeat h-[1050px] bg-[url(https://c.animaapp.com/lcPf2H2l/img/group-5.png)]">
          <Nav />
          <LandingBand />
      </div>
      <LandingBoard />
      <Footer />
    </div>
  )
}

export default LandingPage