import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Componets/Navbar/Navbar';
import ProductsContextProvider from './Context/ProductContext';

const MyRoutes = () => {
    return (
        <ProductsContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<NavBar/>}/>
                </Routes>
            </BrowserRouter>
        </ProductsContextProvider>
    );
};

export default MyRoutes;