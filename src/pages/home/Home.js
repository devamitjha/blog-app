import React from 'react';
import Hero from '../../component/hero/Hero';
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Hero/>
      <div className="main_content">
        <div className="post_container">
          <div className="widget-heading">
            <span>Latest Posts</span>
          </div>          
          <div className="blog_card_container">
            <div className="card">
                <div className="card_image">
                  <img src={process.env.PUBLIC_URL + '/images/hero/1.jpg'} alt="fashion"/>
                  <div className="label fashion">Fashion</div>
                </div>
                <div className="card_containent">
                  <div className="card_header">How Lovely Yellow is! It Stands for the Sun</div>
                  <div className="card_content">
                    <div className="entry_meta">
                      <div className="meta_item meta_author">Devamit</div>
                      <div className="meta_item meta_date">10 days ago</div>
                      <div className="meta_item meta_more">Read More</div>
                    </div>
                    <div className="entry_excerpt line_clamp"> Venus has a runaway greenhouse effect. I kind of want to know what happened there because we’re twirling knobs here on Earth without knowing the consequences of it. Mars once</div>
                  </div>
                </div>
            </div>
            <div className="card">
                <div className="card_image">
                  <img src={process.env.PUBLIC_URL + '/images/hero/2.jpg'} alt="fashion"/>
                  <div className="label fashion">Fashion</div>
                </div>
                <div className="card_containent">
                  <div className="card_header">How Lovely Yellow is! It Stands for the Sun</div>
                  <div className="card_content">
                    <div className="entry_meta">
                      <div className="meta_item meta_author">Devamit</div>
                      <div className="meta_item meta_date">10 days ago</div>
                      <div className="meta_item meta_more">Read More</div>
                    </div>
                    <div className="entry_excerpt line_clamp"> Venus has a runaway greenhouse effect. I kind of want to know what happened there because we’re twirling knobs here on Earth without knowing the consequences of it. Mars once</div>
                  </div>
                </div>
            </div>
            <div className="card">
                <div className="card_image">
                  <img src={process.env.PUBLIC_URL + '/images/hero/3.jpg'} alt="fashion"/>
                  <div className="label fashion">Fashion</div>
                </div>
                <div className="card_containent">
                  <div className="card_header">How Lovely Yellow is! It Stands for the Sun</div>
                  <div className="card_content">
                    <div className="entry_meta">
                      <div className="meta_item meta_author">Devamit</div>
                      <div className="meta_item meta_date">10 days ago</div>
                      <div className="meta_item meta_more">Read More</div>
                    </div>
                    <div className="entry_excerpt line_clamp"> Venus has a runaway greenhouse effect. I kind of want to know what happened there because we’re twirling knobs here on Earth without knowing the consequences of it. Mars once</div>
                  </div>
                </div>
            </div>
            <div className="card">
                <div className="card_image">
                  <img src={process.env.PUBLIC_URL + '/images/hero/4.jpg'} alt="fashion"/>
                  <div className="label fashion">Fashion</div>
                </div>
                <div className="card_containent">
                  <div className="card_header">How Lovely Yellow is! It Stands for the Sun</div>
                  <div className="card_content">
                    <div className="entry_meta">
                      <div className="meta_item meta_author">Devamit</div>
                      <div className="meta_item meta_date">10 days ago</div>
                      <div className="meta_item meta_more">Read More</div>
                    </div>
                    <div className="entry_excerpt line_clamp"> Venus has a runaway greenhouse effect. I kind of want to know what happened there because we’re twirling knobs here on Earth without knowing the consequences of it. Mars once</div>
                  </div>
                </div>
            </div>

          </div>
        </div>
        <div className="sidebar_container">
          <div className="widget_container">
            <div className="widget-heading">
              <span>Editor Picks</span>
            </div>
          </div>

          <div className="widget_container">
            <div className="widget-heading">
              <span>Join Us</span>
            </div>
          </div>

          <div className="widget_container">
            <div className="widget-heading">
              <span>Recent</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home