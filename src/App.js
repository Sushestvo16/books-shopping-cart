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

    }
  }
  render() {
    return (
      <Router>
        <div className="App">
         <Header />
         <Filter />
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
