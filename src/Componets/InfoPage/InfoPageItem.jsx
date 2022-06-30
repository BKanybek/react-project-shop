import React from 'react';
import './InfoPage.css'

const InfoPageItem = ({item}) => {
    console.log(item.img)
    return (
        <div className='container-wrapper'>
            <div className='wrapper-img'></div>
                <img className='img' src={item.img} alt='test'/>    
            <div className='info'>
                 <h1 className='title'>{item.title}</h1>
                <a href='/' className='button'> Подробнее</a>
            </div>
            
        </div>
    );
};

export default InfoPageItem;