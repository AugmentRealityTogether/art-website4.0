import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1> Check out these EPIC ART Projects! </h1>
            <div className='cards__container'>
                <div className='cards__wraper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/reality.jpeg'
                            text='Explore the hidden dimensions of reality'
                            label='Dimensions'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>           
        </div>
    );
}


export default Cards;