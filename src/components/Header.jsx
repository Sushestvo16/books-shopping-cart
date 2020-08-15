import React from 'react';
import "../css/module.css";
import {NavLink} from "react-router-dom";




const Header = (props) => {
    return (
        <div>
            <header className="header">
        <div className="header__inner">
          <NavLink to="/" className="header__link"> Home </NavLink>
          <NavLink to="/library" className="header__link">Library</NavLink>
          <NavLink to="/about-us" className="header__link">About Us</NavLink>
        </div>
      </header>
        </div>
    )

};

export default Header;
