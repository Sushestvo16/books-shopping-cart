import React from 'react';
import './App.css';
import Main from "./components/Main";
import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PageRenderer from './components/PageRenderer'
import Filter from './components/Filter';
import Cart from './components/Cart';
import store from './components/store';
import { Provider } from 'react-redux';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

    }
  }
  createOrder = (order) => {
    alert("Need to save" + order.name);
  }
  removeFromCart = (product) => {
    let cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter(x=>x.id!==product.id)
    });
    localStorage.setItem("cartItem", JSON.stringify(cartItems.filter(x=>x.id!==product.id)));
  }
  addToCart = (product) => {
    let cartItems = this.state.cartItems.slice();
    let alredyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id){
        item.count++;
        alredyInCart = true;
      }
    });
    if (!alredyInCart) {
      cartItems.push({...product, count: 1});
    }
    this.setState({
      cartItems
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
      
  // sortBook = (event) => {
  //   let sort = event.target.value;
  //   console.log(event.target.value)
  //   this.setState((state) =>({
  //     sort: sort,
  //     products: this.state.products.slice()
  //     .sort( (a,b) => 
  //       sort === "lowest" 
  //       ? a.price > b.price
  //        ? 1 
  //        : -1
  //       : sort === "highest"
  //       ? a.price < b.price
  //        ? 1 
  //        : -1
  //       : a.id < b.id
  //       ? 1 
  //       : -1
  //     )

  //   }))
  // }
  // filterGenres = (event) => {
  //   if (event.target.value === "") {
  //     this.setState({
  //       genre: event.target.value , products: data.products})
  //   } else {
  //     this.setState({
  //       genre: event.target.value,
  //       products: data.products.filter(product=> product.genre.indexOf(event.target.value) >=0)
  //     })
  //   }
  // }
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
         <Header />
         <Filter />
          <div className="main__content">
          
          <Main addToCart={this.addToCart}/>
          <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} createOrder={this.createOrder} />
          </div>
          
          <Switch>
            {/* <Route path="/:page" component={PageRenderer} /> */}
            <Route  path="/" render={()=> <Redirect to="/home"/>} /> 
            {/* <Route component={() => 404} /> */}
          </Switch>
        </div>
      </Router>
    </ Provider>
  );
  }
}
  
export default App;
