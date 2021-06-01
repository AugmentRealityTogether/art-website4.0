import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import videoIntro from "../assets/videos/video-2.mp4";
//'../assets/videos/video-2.mp4'
import img1 from "../assets/images/ARTNoSpace.png";

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={videoIntro} autoPlay loop muted /> 
            <img 
                    src={img1} 
                    width = "600"
                    height = "600"
                    />
            <p> Augment Reality Together</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED 
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far
                    fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
