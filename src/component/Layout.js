import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer'

const Layout = () => {
  return (
    <div id="blog">
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout