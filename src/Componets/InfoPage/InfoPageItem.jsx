import React from 'react';
import './InfoPage.css'

const InfoPageItem = ({item}) => {
    console.log(item.img)
    return (
        <div className='container-wrapper'>
            <div className='img-wrapper'>
                <img className='img' src={item.img} alt='test'/>    
            </div>
            <div className='info'>
                <h1 className='title'>{item.title}</h1>
                <a href='/' className='button'> Подробнее</a>
            </div>    
        </div>
    );
};

export default InfoPageItem;