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
                    text='Squawk is a longterm langugage learning rentention app.'
                    label='Squawk'
                    path='/Products'
                    />
                    <CardItem
                    src={img2}
                    text='Augmented Reality hoodie that displays 3D images in real time seen through the lens of your camera.'
                    label='AR Hoodie'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src={img3}
                    text='Invitation that reveals 3D images in real time.'
                    label='3D Invite'
                    path='/services'
                    />
                    <CardItem
                    src={img4}
                    text='3D Visualizer that displays a virtual representation of the beaches of Santa Barbara, where our headquarters is located.'
                    label='Visualizer'
                    path='/products'
                    />
                    <CardItem
                    src={img5}
                    text='Step inside a virtual portal that transforms your environment. '
                    label='AR Portal'
                    path='/sign-up'
                    />
                    </ul>
                </div>
            </div>           
        </div>
    );
}


export default Cards;