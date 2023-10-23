import React from 'react';
import "./Header.scss";
import Menu from '../menu/Menu';
import { Link } from 'react-router-dom';

const HeaderTop = ()=>{
  const user = false;
  return(
    <div className="headerTop">
      <div className="social left">
        <span><i className="fa fa-facebook" aria-hidden="true"></i></span>
        <span><i className="fa fa-twitter" aria-hidden="true"></i></span>
        <span><i className="fa fa-linkedin" aria-hidden="true"></i></span>
        <span><i className="fa fa-youtube-play" aria-hidden="true"></i></span> 
      </div>
      <Link to="/" className="logo">Dev Blog</Link>
      <div className="headerLogin">
       <div className="userSection">
            <span className="userDetails"><i className="fa fa-user-o" aria-hidden="true"></i></span>
       {user ? (
            <div className="userContainer">
              <div className="item logOut">Logout</div>
            </div>
          ) : (
            <div className="userContainer">
              <Link to="user/login" className="item login">Login</Link>
              <Link to="user/register" className="item Register">Register</Link>
            </div>
          )}
       </div>
       <div className="cartSection">
        <span><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
        <span><i className="fa fa-search" aria-hidden="true"></i></span>
        <span><i className="fa fa-heart-o" aria-hidden="true"></i></span>
       </div>
      </div>
    </div>
  )
};

const Header = () => {
  return (
    <header>     
     <div className="header_container">
      <HeaderTop/>
      <Menu/>
     </div>
    </header>
  )
}

export default Header