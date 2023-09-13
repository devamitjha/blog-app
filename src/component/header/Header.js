import React from 'react';
import "./Header.scss";
import Menu from '../menu/Menu';

const HeaderTop = ()=>{
  const user = false;
  return(
    <div className="headerTop">
      <div className="social left">
        <span><i class="fa fa-facebook" aria-hidden="true"></i></span>
        <span><i class="fa fa-twitter" aria-hidden="true"></i></span>
        <span><i class="fa fa-linkedin" aria-hidden="true"></i></span>
        <span><i class="fa fa-youtube-play" aria-hidden="true"></i></span> 
      </div>
      <div className="logo">Logo</div>
      <div className="headerLogin">
       <div className="userSection">
            <span className="userDetails"><i class="fa fa-user-o" aria-hidden="true"></i></span>
       {user ? (
            <div className="userContainer">
              <div className="item logOut">Logout</div>
            </div>
          ) : (
            <div className="userContainer">
              <div className="item login">Login</div>
              <div className="item Register">Register</div>
            </div>
          )}
       </div>
       <div className="cartSection">
        <span><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
        <span><i class="fa fa-search" aria-hidden="true"></i></span>
        <span><i class="fa fa-heart-o" aria-hidden="true"></i></span>
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