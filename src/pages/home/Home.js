import React from 'react';
import Hero from '../../component/hero/Hero';
import "./Home.scss";
import Sidebar from '../../component/sidebar/Sidebar';
import Card from '../../component/card/Card';
import Loadmore from '../../component/Loadmore/Loadmore';

const Home = () => {
  return (
    <div className="home">
      <Hero/>
      <div className="main_content">
        <div className="post_container">
          <div className="widget-heading">
            <span>Latest Posts</span>
          </div>          
          <Card/>
          <Loadmore/>
        </div>
        <Sidebar/>        
      </div>
    </div>
  )
}

export default Home