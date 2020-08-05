const SET_BOOK_DATA = "SET_BOOK_DATA";
const BUY_BOOK = 'BUY_BOOK';
const BOUGHT_BOOK = 'BOUGHT_BOOK';
let initialState = {
  book: [
    { id: 1, name: "1984", link:"https://i.pinimg.com/736x/e0/ab/3d/e0ab3d634e60a1e073e9f1ffd12cb54f.jpg",
     bought: true },
    { id: 2, name: "Война и Мир", link:"https://b1.culture.ru/c/365442.jpg", bought: false },
    { id: 3, name: "Преступление наказание", link:"https://img2.labirint.ru/rcimg/04da874fdf4f114defb1c43f7a272b08/960x540/books66/656936/ph_001.jpg?1564125511",
      bought: true }
  ],
  description: [
    { id: 1, description: "авполвлжпдавылжа" },
    { id: 2, description: "ырвоавыавыда" },
    {id:3, description: "jsdfjkds;fkd;sf"}
  ],

};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOK_DATA:
      return {
        ...state,
        book: action.book
      }
    case BUY_BOOK:
  return {
...state,
book: state.book.map( b=> {
  if (b.id===action.bought) {
return {...b, bought: true}
  }
  return b;
})
  }
case BOUGHT_BOOK:
  return {
...state,
book: state.book.map( b=> {
  if (b.id===action.book) {
return {...b, bought: false}
  }
  return b;
})
 }
  default:
    return state;
  }
};

export const setBookDataAC = (book) => ({ type: SET_BOOK_DATA, book });
export const getBookAC = (bought) => ({type: BUY_BOOK, bought});
export const boughtBookAC = (bought) => ({type: BOUGHT_BOOK, bought});


export default bookReducer;
