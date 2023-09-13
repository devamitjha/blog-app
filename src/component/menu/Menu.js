import React from 'react';
import "./Menu.scss";
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="about">Feature</NavLink></li>
        <li><NavLink to="/">Tech</NavLink></li>
        <li><NavLink to="about">Travel</NavLink></li>
        <li><NavLink to="/">Fashion</NavLink></li>
        <li><NavLink to="about">Review</NavLink></li>
        <li><NavLink to="/">Shop</NavLink></li>
      </ul>
    </div>
  )
}

export default Menu