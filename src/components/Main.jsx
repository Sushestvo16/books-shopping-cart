import React from "react";
import { connect } from "react-redux";
import { getBookAC } from "../reducers/bookReducer";
import { boughtBookAC } from "../reducers/bookReducer";
import { setBookDataAC } from "../reducers/bookReducer";
import formatCurrency from "../util";
import "../css/module.css";

let Main = (props) => {
  return (
    <div className="wrap__main">
      {props.products.map(p => (
        <div key={p.id} className="container">
          <div className="image_size">
            <a href={"#" + p.id}>
            <img src={p.image} alt={p.name} className="main_images" />
            <div className="main_text">{p.name}</div>
            </a>
            
            <div className="main__description">{p.description}</div>
          </div>
      <div className="product__price">
        <div>
          {formatCurrency(p.price)}
          </div>
        <button className="primary">Add To Card</button>
        </div>
        </div>
      ))}
    </div>
  );
};

let MapStateToProps = state => ({
  book: state.bookPage.book
});
let MapDispatchToProps = dispatch => {
  return {
    bookBuing: book => {
      dispatch(getBookAC(book));
    },
    boughtBook: book => {
      dispatch(boughtBookAC(book));
    },
    setBook: book => {
      dispatch(setBookDataAC(book));
    }
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Main);
