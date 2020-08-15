import React, {Component} from "react";
import { connect } from "react-redux";
import { getBookAC } from "../reducers/bookReducer";
import { boughtBookAC } from "../reducers/bookReducer";
import { setBookDataAC } from "../reducers/bookReducer";
import formatCurrency from "../util";
import "../css/module.css";
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal';
import {fetchBooks} from '../actions/productActions';

class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      product: null
    };
  }
  openModal = (product) => {
    this.setState({
      product
    });
  }
  closeModal = () => {
    this.setState({
      product: null
    })
  }
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    const {product} = this.state;
    return (
      <div className="wrap__main">
        <Fade bottom cascade>
          {!this.props.products ? <div>Loading...</div> :
            <div>
            {this.props.products.map(p => (
              <div key={p.id} className="container">
                <div className="image_size">
                  <a href={"#" + p.id} onClick={()=>this.openModal(p)}>
                  <img src={p.image} alt={p.name} className="main_images" />
                  <div className="main_text">{p.name}</div>
                  </a>
                  
                  <div className="main__description">{p.description}</div>
                </div>
            <div className="product__price">
              <div>
                {formatCurrency(p.price)}
                </div>
              <button className="primary" onClick={() => this.props.addToCart(p)}>Add To Card</button>
              </div>
              </div>
            ))}
            </div>
          }
          
            
          
       
         </Fade>
         {product && (
           <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom> 
            <button className="close__modal" onClick={()=> this.closeModal()}>X</button>
            <div className="modal__container">
              <img src={product.image} alt={product.title}/>
              <div>
                <p>
                  {product.name}
                </p>
                <p>
                  {product.description}
                </p>
         <p>Genres: {" "}{product.genre}</p>
         <div>{formatCurrency(product.price)}</div>
         <button className="primary" onClick={()=>{
            this.props.addToCart(product);
            this.closeModal();
         }
       }>Add To Cart</button>
              </div>
            </div>
            </Zoom>
           </Modal>
         )}
      </div>
    );
  };
}
let MapStateToProps = (state) => ({
  products: state.bookPage.filteredItems
})

  /*
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
  */
  export default connect(
    MapStateToProps,
    {fetchBooks}
  )(Main); 
