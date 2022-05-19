
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './Componets/Admin/AddProduct';
import ListProduct from './Componets/Admin/ListProduct';
import NavBar from './Componets/Navbar/Navbar';
import ProductsContextProvider from './Context/ProductContext';

const MyRoutes = () => {
    return (
        <ProductsContextProvider>
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path='/add' element={<AddProduct/>}/>
                    <Route path='/list' element={<ListProduct/>}/>
                </Routes>
            </BrowserRouter>
        </ProductsContextProvider>
    );
};

export default MyRoutes;