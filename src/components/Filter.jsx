import React, { Component } from 'react'
import "../css/module.css";
import { connect } from 'react-redux';
import {filterProducts, sortProducts} from '../actions/productActions';

 class Filter extends Component {
   
    render() {
        console.log(this.props.sort);
        return (
            <div>
                 {!this.props.filteredProducts ? <div>...Loading</div>
                : <div className="filter">
                <div className="filter-result">
                    {this.props.filteredProducts.lenght} Books
                 </div>
                 <div className="filter-sort">
                    Order <select value={this.props.sort} onChange={(e) => this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                 </div>
                 <div className="filter-size">Filter of Genre{" "}<select value={this.props.genre} onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
                     <option value="">All</option>
                     <option value="Антиутопия">Антиутопия</option>
                     <option value="Роман">Роман</option>
                     <option value="Драма">Драма</option>
                     </select>
                     </div>
            </div>

            }
            </div>
           
            
           
        )
    }
}
let mapStateToProps = (state) => ({
    sort: state.bookPage.sort,
    genre: state.bookPage.genre,
    products: state.bookPage.book,
    filteredProducts: state.bookPage.filteredItems

});

export default  connect(mapStateToProps, {filterProducts, sortProducts})(Filter);
