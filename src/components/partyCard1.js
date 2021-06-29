import React from 'react'
import '../App.css'
import './HeroSection.css'
//import videoIntro from "../assets/videos/video-2.mp4";
import invite from "../assets/videos/4thJuly.mp4"
//'../assets/videos/video-2.mp4'
//import img1 from "../assets/images/ARTNoSpace.png";

function HeroSection() {
    return (
        <div dangerouslySetInnerHTML={{ __html: `
            <video
            loop
            muted
            autoplay
            inline
            src="${invite}"
            />,` }}>
        </div> 
    )
}
/*
<div className='hero-container'>
<video src={invite} autoPlay loop playsinline/>
<br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
<img 
                    src={img1} 
                    width = "600"
                    height = "600"
                    alt = "Video Intro"
                    />
                    */
export default HeroSection
