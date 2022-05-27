import React from 'react';
import './InfoPage.css'

const InfoPageItem = ({item}) => {
    console.log(item.img)
    return (
        <div className='container-wrapper'>
            <img className='img' src={item.img} alt='test'/>    
            <div className='info'>
                <h1 className='title'>{item.title}</h1>
                <button className='button'>Подробнее</button>
            </div>
            
        </div>
    );
};

export default InfoPageItem;