import React from 'react';
import { infoPageData } from '../data'
import InfoPageItem from './InfoPageItem';
import './InfoPageItem.css'


const InfoPage = () => {
    return (
        <div className='wrapper'>
         {infoPageData.map(item =>(
            <InfoPageItem item={item}/>
            ))}
        </div>
    );
};

export default InfoPage;
