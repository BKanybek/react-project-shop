// import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useState } from 'react';
import './Test.css'

const Test = () => {
    const [show, setShow] = useState(false)
    console.log(show);


    return (
     <div className='test'>
        <div className='first'>
           <div className='two'>
                <div className={`three ${!show && 'active'}`}>
                </div>
                

           </div>
           <button onClick={() => setShow(!show)}>Нажми</button>
        </div>
        
     </div>   
    );
}

export default Test