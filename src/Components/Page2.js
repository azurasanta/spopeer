import React from "react";
import image1 from '../Assets/Athletes.png'
import image2 from '../Assets/Coaches.png';
import team from '../Assets/Team.png'
import video from '../Assets/Videographer.png';
import connect from '../Assets/Connect.png'
import share from '../Assets/Share.png';
import promote from '../Assets/Promote.png'
import information from '../Assets/Information.png'
import logo2 from '../Assets/6a14fce9975c37b0ddb181518c7c1af7.png'

const Page2 = () => {
 return(
    <div className="pageTwo">
    <h1>Where Passion Meets Play</h1>
    <p>Whether you are dedicated to perfecting your game, guiding athletes to success, or fueling the sports industry, we bring your dedication to life, turning your passion into power</p>
    <div className="images">
    <img src = {image1} className="athletes" />
    <img src = {image2} className="coaches" />
    <img src = {team} className="team" />
    <img src = {video} className="video" />
    </div>
    <div className="join">
      <p>Join us, whether you are an athlete, coach, sports club, or support professional, and thrive together in the world of sports.</p>
     <button>Get Started Now</button>
    </div>
    <div className="connect-container">
    <div className="connect-text">
      <h1>Connect</h1>
      <p>Forge Meaningful Bonds in the Sports World</p>
    </div>
    <div className="connect">
     <img src = {connect} className="connect" />
    </div>
    </div>
    <div className="share-container">
      <div className="share-text">
       <h1>Share</h1>
       <p>Share your knowledge, experiences, skills or victories, we thrive on the power of shared moments. Each contribution enriches the collective journey towards success.</p>
      </div>
      <div className="share-image">
        <img src = {share} className="share" />
      </div>
    </div>
    <div className="promote-container">
      <div className="promote-text">
        <h1>Promote Yourself</h1>
        <p>SGhowcasing your unique talents and achievements, connect with like-minded individuals, and open doors to new opportunities. Be the architect of your success</p>
      </div>
      <div className="promote-image">
       <img src = {promote} className="promote" />
      </div>
    </div>
    <div className="informed-container">
      <div className="informed-text">
       <h1>Stay Informed</h1>
       <p>Staying informed is a strategic advantage. Spopeer delivers real-time updates, trends, and insider insights, empowering you to make informed decisions and stay one step ahead in your sports journey."</p>
      </div>
      <div className="informed-image">
       <img src = {information} className="information" />
      </div>
    </div>
    <div className="footer">
      <div className="top-footer">
       <p>© 2024 SPOPEER ALL RIGHTS RESERVED</p>
      </div>
    </div>
   </div>
 )
}

export default Page2