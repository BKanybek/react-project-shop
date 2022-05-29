import React from 'react';
import { Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import InfoPage from '../InfoPage/InfoPage';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <InfoPage/>
            <Slider/>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
                <Button style={{backgroundColor: 'black'}}>Перейти к покупкам</Button>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;