import React, { Component } from 'react'
import formatCurrency from '../util';
import Fade from 'react-reveal/Fade';
import {connect} from 'react-redux';
import {removeFromCart} from '../actions/cartActions';

 class Cart extends Component {
    constructor() {
        super();
        this.state={
            name: "",
            email: "",
            address: "",
            showCheckout: false
        }  
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value });
    }
    createOrder = (e) => {
        e.preventDefault();
        let order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems
        };
        this.props.createOrder(order);
    }
    render() {
        const {cartItems} = this.props;
        return (        
            <div className="cart__wrapper">
                {cartItems.length === 0 ? (<div>Cart is Empty</div> ) 
                : (<div> You have {cartItems.length} in the  cart</div>) } 
               <div>
               <Fade left cascade>
                   <ul className="cart__container">
                       
                       {cartItems.map(item => (
                           <li  key={item.id}>
                               <div className="cart__image">
                                   <img className="cart__icon" src={item.image} alt={item.name} />
                               </div>
                               <div className="cart__name">
                                   <div>{item.name}</div>
                                   <div>
                                       {formatCurrency(item.price)} x {item.count}{" "}
                                       <button className="primary" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                                   </div>
                               </div>
                           </li>
                       ))}
                   </ul>
                   </Fade>
               </div>     
                        {cartItems.length!==0 &&  (
                            <div>
                        <div className="total__card">
                        Total:{" "}{formatCurrency(cartItems.reduce((a,c) => a +c.price*c.count, 0))}
                        <button className="primary" onClick={()=>this.setState({showCheckout: true})}> Proceed</button>
                        </div> 
                        
                             {this.state.showCheckout && (
                                 <Fade cascade right>
                            <div>
                                <form onSubmit={this.createOrder}>
                                    <ul className="form__container">
                                        <li>
                                        <label>Email</label>
                                        <input name="email" required placeholder="email" onChange={this.handleInput}></input>
                                        </li>
                                        <li>
                                        <label>Name</label>
                                        <input name="name" type="text" required placeholder="name" onChange={this.handleInput}></input>
                                        </li>
                                        <li>
                                        <label>Address</label>
                                        <input type="text" name="address" required placeholder="address" onChange={this.handleInput}></input>
                                        </li>
                                        <li>
                                            <button className="primary" type="submit">Checkout</button>
                                        </li>
                                    </ul>
                                    

                                </form>
                            </div>
                            </Fade>
                        )}
                        
                        </div>
                        )}
                        
                        
               
            </div>
           
        )
        
    }
}

export default connect (
    (state)=> ({
    cartItems: state.cartPage.cartItems,
}),
    {removeFromCart}
)(Cart);