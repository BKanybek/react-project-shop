import {  Paper, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../Context/ProductContext';


const DetailProduct = () => {
    const {id} = useParams() 
    const { detail, getDetail } = useContext(productContext)
    console.log(detail, 'detail')
    useEffect(() => {
        getDetail(id)
    }, [id])


    return (
                        <div  style={{ background: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'start', padding: 20,  flexWrap: 'wrap'}}>
                            <div>
                                <img width='320' src={detail.image}/>
                            </div>
                            <div style={{
                                width: '450px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex=start',
                                textAlign: 'start',
                                justifyContent: 'center',
                                padding: '0 30px',

                            }}>
                                <Typography>{detail.name}</Typography>
                                <Typography>{detail.price }</Typography>
                                <Typography>{detail.description}</Typography>
                            </div>
                        </div>
    );
};

export default DetailProduct;







