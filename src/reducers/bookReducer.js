import {FETCH_BOOKS} from '../types';
const SET_BOOK_DATA = "SET_BOOK_DATA";
const BUY_BOOK = 'BUY_BOOK';
const BOUGHT_BOOK = 'BOUGHT_BOOK';

let initialState = {};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        book: action.payload
      }
//     case SET_BOOK_DATA:
//       return {
//         ...state,
//         book: action.book
//       }
//     case BUY_BOOK:
//   return {
// ...state,
// book: state.book.map( b=> {
//   if (b.id===action.bought) {
// return {...b, bought: true}
//   }
//   return b;
// })
//   }
// case BOUGHT_BOOK:
//   return {
// ...state,
// book: state.book.map( b=> {
//   if (b.id===action.book) {
// return {...b, bought: false}
//   }
//   return b;
// })
//  }
  default:
    return state;
  }
};

// export const setBookDataAC = (book) => ({ type: SET_BOOK_DATA, book });
// export const getBookAC = (bought) => ({type: BUY_BOOK, bought});
// export const boughtBookAC = (bought) => ({type: BOUGHT_BOOK, bought});


export default bookReducer;
