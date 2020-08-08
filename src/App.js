import React from 'react';
import './App.css';
import Main from "./components/Main";
import Header from "./components/Header";
import data from "./data.json";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PageRenderer from './components/PageRenderer'
import Filter from './components/Filter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      genre: "",
      sort: ""

    }
  }
  sortBook = (event) => {
    let sort = event.target.value;
    console.log(event.target.value)
    this.setState((state) =>({
      sort: sort,
      products: this.state.products.slice()
      .sort( (a,b) => 
        sort === "lowest" 
        ? a.price > b.price
         ? 1 
         : -1
        : sort === "highest"
        ? a.price < b.price
         ? 1 
         : -1
        : a.id < b.id
        ? 1 
        : -1
      )

    }))
  }
  filterGenres = (event) => {
    if (event.target.value === "") {
      this.setState({
        genre: event.target.value , products: data.products})
    } else {
      this.setState({
        genre: event.target.value,
        products: data.products.filter(product=> product.genre.indexOf(event.target.value) >=0)
      })
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
         <Header />
         <Filter count={this.state.products.length} genre={this.state.genre}
          sort={this.state.sort} filterGenres={this.filterGenres}
          sortBook={this.sortBook}/>
          <div>
          <Main products={this.state.products}/>
          </div>
          
          <Switch>
            {/* <Route path="/:page" component={PageRenderer} /> */}
            <Route  path="/" render={()=> <Redirect to="/home"/>} /> 
            {/* <Route component={() => 404} /> */}
          </Switch>
        </div>
      </Router>

  );
  }
  
}

export default App;
