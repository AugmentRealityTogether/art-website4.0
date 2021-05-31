import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
import img1 from "../assets/images/squawk.jpeg";
import img2 from "../assets/images/Billie.png";
import img3 from "../assets/images/Danny.png";
import img4 from "../assets/images/playa.jpeg";
import img5 from "../assets/images/Portal.png";


function Cards() {
    return (
        <div className='cards'>
            <h1> Check out these EPIC ART Projects! </h1>
            <div className='cards__container'>
                <div className='cards__wraper'>
                    <ul className='cards__items'>
                    <CardItem
                    src= {img1}
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Squawk'
                    path='/Products'
                    />
                    <CardItem
                    src={img2}
                    text='Travel through the Islands of Bali in a Private Cruise'
                    label='Luxury'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src={img3}
                    text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                    label='Mystery'
                    path='/services'
                    />
                    <CardItem
                    src={img4}
                    text='Experience Football on Top of the Himilayan Mountains'
                    label='Adventure'
                    path='/products'
                    />
                    <CardItem
                    src={img5}
                    text='Ride through the Sahara Desert on a guided camel tour'
                    label='Adrenaline'
                    path='/sign-up'
                    />
                    </ul>
                </div>
            </div>           
        </div>
    );
}


export default Cards;