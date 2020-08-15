import * as axios from 'axios'; 
import { FETCH_BOOKS } from "../types";
import {FILTER_PRODUCTS_BY_GENRE} from "../types";
import {SORT_PRODUCTS_BY_PRICE} from "../types";

export const fetchBooks = () => (dispatch) => {
   axios.get("https://my-json-server.typicode.com/Sushestvo16/db/products/")
   .then(responce=>{
      let dataBooks = responce.data;
      dispatch({
        type: FETCH_BOOKS,
        payload: dataBooks
    });
   })
};

export const filterProducts = (products, genre) => (dispatch) => {
    
    dispatch({
        type: FILTER_PRODUCTS_BY_GENRE,
        payload: {
            genre: genre, 
            books: genre === "" ? products : 
            products.filter((x)=> x.genre.indexOf(genre)>=0)
            
        }
    });

}

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
    const sortedProducts = filteredProducts.slice();
    if (sort==="latest") {
        sortedProducts.sort((a,b) => a.id>b.id ? 1 : -1)
    }
    else {
        sortedProducts.sort((a, b) => sort === "lowest" ? a.price > b.price ? 1 : -1
        : a.price<b.price ? 1: -1 );
    }
    dispatch({
        type: SORT_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            books: sortedProducts
        }
    })
   
}