import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './Componets/Admin/AddProduct';
import NavBar from './Componets/Navbar/Navbar';
import ProductsContextProvider from './Context/ProductContext';

const MyRoutes = () => {
    return (
        <ProductsContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<NavBar/>}/>
                    <Route path='/add' element={<AddProduct/>}/>
                </Routes>
            </BrowserRouter>
        </ProductsContextProvider>
    );
};

export default MyRoutes;