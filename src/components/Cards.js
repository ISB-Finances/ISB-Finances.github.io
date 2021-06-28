import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out our resources below!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/guides.jpg'
                        text='Learning Guides'
                        //label='Adventure'
                        path='/learning-guides'/>
                        <CardItem 
                        src='images/comparisons.jpg'
                        text='Comparisons'
                        //label='Adventure'
                        path='/comparisons'/>
                        <CardItem 
                        src='images/glossary.jpg'
                        text='Glossary'
                        //label='Adventure'
                        path='/glossary'/>
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/budgeting.jpg'
                        text='Budgeting Hub'
                        path='/budgeting-hub'/>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards
