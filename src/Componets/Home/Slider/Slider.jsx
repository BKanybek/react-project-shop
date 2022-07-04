import React, { useContext, useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
// import Item from './Item';
import './Slider.css';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { productContext } from '../../../Context/ProductContext';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 7},
  ];



const Slider = () => {
    const { products, getProducts } = useContext(productContext)  

    useEffect(() => {
        getProducts()
    }, [])

    
    return (
      <>
            <div className='slider' >
              <Carousel style={{ maxWidth: '1398px', margin: 'auto'}} breakPoints={breakPoints} >
                  {
                    products ? (
                      products.map((item, index) => (
                          <Card style={{boxShadow: 'none'}} key={index}>
                            <Link to={`/detail/${item.id}`} style={{textDecoration: 'none', color: 'black'}}> 
                              <CardMedia
                                sx={{width: '166px', height: '220px'}}
                                component="img"
                                image={item.image}
                                alt={item.name}
                              />
                              <CardContent className='item-name'>
                                <Typography style={{fontSize: '13px'}}>
                                  {item.name}
                                </Typography>
                              </CardContent>
                              <CardContent className='item-price'>
                                <Typography style={{fontWeight: '700'}}>
                                    {item.price} сом
                                </Typography>
                              </CardContent>
                            </Link>
                        </Card>
                    ))
                  ): (<h1>Loading...</h1>)
                }
              </Carousel>
            </div>
      </>
    );
};

export default Slider;