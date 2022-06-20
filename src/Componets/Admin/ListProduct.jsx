import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams} from 'react-router-dom';
import { Box, Grid, InputBase, Pagination, Stack } from '@mui/material';
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
            <Box  sx={{ maxWidth: '1300px', flexGrow: 1, margin: 'auto'}}>
                <Grid container spacing={{xs: 2, sm: 4, md: 10, lg: 4, }} columns={{xs: 4, sm: 8, md: 12}}>
                    {
                        products ? (
                            products.map((item, index) => (
                                    <Grid  item xs={2} sm={4} md={4} key={index}>
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