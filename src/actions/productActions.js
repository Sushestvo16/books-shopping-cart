import { FETCH_BOOKS } from "../types";

export const fetchBooks = () => async (dispatch) => {
   const res = await fetch("http://localhost:3000/products/");
   const data = await res.json();
   dispatch({
       type: FETCH_BOOKS,
       payload: data
   });
};