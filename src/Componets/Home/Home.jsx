import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import InfoPage from '../InfoPage/InfoPage';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <InfoPage/>
            <Slider/>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
                <Link to="/list">
                 <Button style={{backgroundColor: 'black'}}>Перейти к покупкам</Button>
                </Link> 
            </div>
            <Footer/>
        </div>
    );
};

export default Home;