
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from './Componets/Admin/AddProduct';
import DetailProduct from './Componets/Admin/DetailProduct';
import ListProduct from './Componets/Admin/ListProduct';
import Home from './Componets/Home/Home';
import NavBar from './Componets/Navbar/Navbar';
import Search from './Componets/Search/Search';
import Test from './Componets/Test';
import ProductsContextProvider from './Context/ProductContext';

const MyRoutes = () => {
    return (
        <ProductsContextProvider>
            <BrowserRouter> 
            <NavBar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/add' element={<AddProduct/>}/>
                    <Route path='/list' element={<ListProduct/>}/>
                    <Route path='/detail/:id' element={<DetailProduct/>}/>
                    <Route path='/2' element={<Search/>}/>
                    <Route path='/test' element={<Search/>}/>
                    <Route path='/test1' element={<Test/>}/>
                </Routes>
            </BrowserRouter>
        </ProductsContextProvider>
    );
};

export default MyRoutes;