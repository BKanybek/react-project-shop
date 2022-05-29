import React from 'react';
import { infoPageData } from '../data'
import InfoPageItem from './InfoPageItem';


const InfoPage = () => {
    return (
        <div style={{display: 'flex', padding: '20px', maxWidth: '1360px', margin: 'auto'}}>
            {infoPageData.map(item =>(
                <InfoPageItem item={item}/>
            ))}
        </div>
    );
};

export default InfoPage;