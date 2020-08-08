import React, { Component } from 'react'
import "../css/module.css";

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">
                    {this.props.count} Books
                 </div>
                 <div className="filter-sort">
                    Order <select value={this.props.sort} onChange={this.props.sortBook}>
                        <option >Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                 </div>
                 <div className="filter-size">Filter of Genre{" "}<select value={this.props.genre} onChange={this.props.filterGenres}>
                     <option value="">All</option>
                     <option value="Антиутопия">Антиутопия</option>
                     <option value="Роман">Роман</option>
                     <option value="Драма">Драма</option>
                     </select>
                     </div>
            </div>
           
        )
    }
}
