import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams} from 'react-router-dom';
import { Box, Grid, InputBase, Pagination, Stack } from '@mui/material';
// import Filter from './Filter/Filter';
// import './ListObject.css'

import { productContext } from '../../Context/ProductContext';
import ProductCard from '../ProductCard/ProductCard';





const ListProduct = () => {
    const { products, getProducts, paginatedPages } = useContext(productContext)

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <div>
            {/* <Filter />  */}

            <Box sx={{flexGrow: 1, margin: 4}}>
                <Grid container spacing={{xs: 1, md: 12, lg: 12}} columns={{xs: 1, sm: 6, md: 12, lg: 9}}>
                    {
                        products ? (
                            products.map((item, index) => (
                                    <Grid sx={{display: 'flex', justifyContent: 'center'}} item xs={1} sm={3} md={6} lg={2}  key={index}>
                                        <ProductCard item={item} key={index}/>
                                    </Grid>
                            ))
                        ): (<h1>Loading...</h1>)
                    }
                </Grid>
            </Box>
        </div>
    );
};

export default ListProduct;