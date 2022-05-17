import axios from 'axios';
import React, { createContext, useEffect, useReducer, useState } from 'react';
import { API } from '../Helpers/Const';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { calcSubPrice, calcTotalPrice } from '../Helpers/CalcPrice';
import { auth } from '../Firebase';


export const productContext = createContext()

const INIT_STATE = {
    products: null,
    edit: null,
    cart: {},
    cartLength: 0,
    paginatedPages: 1,
    detail: {},
    star: {},
    starLength: 0,
}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case "GET_PRODUCTS":
            return {...state, products: action.payload.data, 
                paginatedPages: Math.ceil(action.payload.headers["x-total-count"] /6)}
        case "GET_EDIT_PRODUCT":
            return{...state, edit: action.payload}
        case "CHANGE_CART_COUNT":
            return{...state, cartLength: action.payload}
        case "GET_CART":
            return{...state, cart: action.payload}  
        case "GET_DETAIL_PRODUCT":
            return{...state, detail: action.payload}
        case "СHANGE_STAR_COUNT":
            return{...state, starLength: action.payload}
        case "GET_STAR":
            return{...state, star: action.payload}  
        default: 
            return state
    }
}
const ProductsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    // ! CREATE 
    const addProduct = async (newProduct) =>  {
        try {
                await axios.post(API, newProduct)
                getProducts()
        } catch (error) {
            alert(error)
        }
    }

    
    // ! READ   
    const getProducts = async () => {
        try {
            let res = await axios.get(`${API}${window.location.search}`)
            let action = {
                type: "GET_PRODUCTS",
                payload: res
            }
            dispatch(action)
    
        } catch (error) {
            alert(error)
        }
    }

     //! DELETE 
     const deleteProduct = async (id) => {
        await axios.delete(`${API}/${id}`) 
        getProducts()
    }

     //! Edit Product

     const  editProduct = async (id) => {
        try {
            let res = await axios(`${API}/${id}`)
            let action = {
                type: "GET_EDIT_PRODUCT",
                payload: res.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
     //! save edited Product

     const saveEditedProduct = async (updatedProduct) => {
        try {
            await axios.patch(`${API}/${updatedProduct.id}`, updatedProduct)
            getProducts()
        }catch (error) {
            console.log(error);
        }
    }


    //! GEt Detail

    const getDetail = async (id) => {
        const res = await axios(`${API}/${id}`)
        let action = {
            type: "GET_DETAIL_PRODUCT",
            payload: res.data
        }
        dispatch(action) 
    }


    //! Add To CArt  dobavlenie v korzinu (localstorage)

    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        let newProduct = {
            item: product,
            count: 1,
            subPrice: 0
        }
        let filteredCart = checkProductInCart(product.id)

        if (filteredCart === true ) {
            cart.products = cart.products.filter(elem => elem.item.id !== product.id )
        }else{
            cart.products.push(newProduct)
        }
        newProduct.subPrice = calcSubPrice (newProduct)
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.products.length
        })
       
    }

    
    const getCartLength = () => { 
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        dispatch({
        type: "CHANGE_CART_COUNT",
        payload: cart.products.length
        })
    }

    const getCart = () => { 
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart = {
                products: [],
                totalPrice: 0
            }
    }
    dispatch({
        type: "GET_CART",
        payload: cart
    })
    }
 
    const changeProductCount = (count, id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        cart.products = cart.products.map(elem => {
            if(elem.item.id === id && count >= 0){ 
                    elem.count = count
                    elem.subPrice = calcSubPrice(elem)
            }
            return elem
        })
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem('cart', JSON.stringify(cart))
        getCart()
    }
    
    //! check product in cart

    const checkProductInCart = (id) =>  {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(!cart){
            cart = { 
                products: [],
                totalPrice: 0
            }
        }
        let newCart = cart.equipments.filter(elem => elem.item.id === id)
        return newCart.length > 0 ? true : false
    }

    function deleteCartEquipment(id){
        let toDelete = JSON.parse(localStorage.getItem("cart"));
        toDelete.equipments = toDelete.equipments.filter(
          (elem) => elem.item.id !== id
        );
        localStorage.setItem("cart", JSON.stringify(toDelete))
        getCart()
        
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: toDelete.equipments.length
        })
      }

//! Избранное

const addToStar = (product) => {
    let star = JSON.parse(localStorage.getItem('star'));
    if(!star) {
        star = {
            products: [],
        }
    }
    let newProduct= {
        item: product,
        count: 1,
    }
    let filteredStar = checkProductsInStar(product.id)
    if(filteredStar === true) {
        star.products = star.products.filter(elem => elem.item.id !== product.id )
    }
    else{
        star.products.push(newProduct)
    }
    // newProduct.subPrice = calcSubPrice(newProduct)
    // cart.totalPrice = calcTotalPrice(cart.products)
    localStorage.setItem('star', JSON.stringify(star))
    dispatch({
        type: 'СHANGE_STAR_COUNT',
        payload: star.products.length 
    })
}
  const getStarLength = () => {
    let star = JSON.parse(localStorage.getItem('star'));
    if(!star) {
        star = {
            products: [],
        }
    }
    dispatch({
        type: 'СHANGE_STAR_COUNT',
        payload: star.products.length 
    })
}

// !для стягивания и отображения данных с корзины
    const getStar = () => {
        let star = JSON.parse(localStorage.getItem('star'));
    if(!star) {
        star = {
            products: [],
            
        }
    }
    dispatch({
        type: 'GET_STAR',
        payload: star
    })
    }

    // const changeEquipmentStar = (count, id) => {
    //     let star = JSON.parse(localStorage.getItem('star'))
    //     star.equipments = star.equipments.map(elem => {
    //         if(elem.item.id === id && count >= 0){ 
    //                 elem.count = count
    //         }
    //         return elem
    //     })
    //     localStorage.setItem('cart', JSON.stringify(star))
    //     getStar()
    // }
    

    const checkProductsInStar = (id) => {
        let star = JSON.parse(localStorage.getItem('star'))
        if(!star) {
            star= {
                products: [],
            }
        }
        let newStar = star.products.filter(elem => elem.item.id === id)
        return newStar.length > 0 ? true : false
    }
           // ! DELETEPRODUCTINstar
           const deleteProductInStar = (id) => {
            let toDelete = JSON.parse(localStorage.getItem('star'));
            toDelete.products = toDelete.products.filter(
                (elem) => elem.item.id !== id
            );
            localStorage.setItem('star', JSON.stringify(toDelete))
            getStar()
            dispatch({
                type: "CHANGE_STAR_COUNT",
                payload: toDelete.products.length
            })
        }


    //! Sign IN / sign up

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    
    function logout(){
        return signOut(auth)
    }
    function useAuth(){             
        const [currentUser, setCurrentUser] = useState() 

        useEffect(() => { 
            const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
            return unsub
        }, [])
        return currentUser
    }

    return (
        <productContext.Provider value={{
            addProduct,
            getProducts,
            deleteProduct,
            editProduct,
            saveEditedProduct,
            addToCart,
            checkProductInCart,
            getCartLength,
            getCart,
            changeProductCount,
            getDetail,
            addToStar,
            getStarLength,
            getStar,
            checkProductsInStar,
            deleteProductInStar,
            signIn,
            signUp,
            logout,
            useAuth,
            // ForgotPassword,
            // deleteCartProduct,
            // deleteCartPayment,
            edit: state.edit,
            products: state.products,
            cartLength: state.cartLength,
            cart: state.cart,
            paginatedPages: state.paginatedPages,
            detail: state.detail,
            star: state.star,
            starLength: state.starLength,
            
        }}>
            {children}
        </productContext.Provider>
    );
};

export default ProductsContextProvider;