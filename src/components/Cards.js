import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
import squawk from "../assets/images/squawk.jpeg";
import img2 from "../assets/images/img-2.jpg";

function Cards() {
    return (
        <div className='cards'>
            <h1> Check out these EPIC ART Projects! </h1>
            <div className='cards__container'>
                <div className='cards__wraper'>
                    <ul className='cards__items'>
                    <CardItem
                    src= {squawk}
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
                    src='../assets/images/img-3.jpg'
                    text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                    label='Mystery'
                    path='/services'
                    />
                    <CardItem
                    src='../assets/images/img-4.jpg'
                    text='Experience Football on Top of the Himilayan Mountains'
                    label='Adventure'
                    path='/products'
                    />
                    <CardItem
                    src='../assets/images/img-8.jpg'
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