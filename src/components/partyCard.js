import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
import img1 from "../assets/images/wonk.png";


function Cards() {
    return (
        <div className='cards'>
            <h1> Check out these EPIC fART Projects! </h1>
            <div className='cards__container'>
                <div className='cards__wraper'>
                    <ul className='cards__items'>
                    <CardItem
                    src= {img1}
                    text="You've lost your site"
                    label='Squawk'
                    path='/'
                    />
                </ul>
                </div>
            </div>           
        </div>
    );
}


export default Cards;