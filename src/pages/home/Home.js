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
                  <img src={process.env.PUBLIC_URL + '/images/posts/1.jpg'} alt="fashion"/>
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
                  <img src={process.env.PUBLIC_URL + '/images/posts/2.jpg'} alt="fashion"/>
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
                  <img src={process.env.PUBLIC_URL + '/images/posts/3.jpg'} alt="fashion"/>
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
                  <img src={process.env.PUBLIC_URL + '/images/posts/4.jpg'} alt="fashion"/>
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
            <div className="widget-body">
              <div className="widget-thumb">
                <img src={process.env.PUBLIC_URL + '/images/01.jpg'} alt="editor picks"/>
              </div>
              <div className="widget-small-desc">
                  <div className="widget-cats">Fashion</div>
                  <div className="widget-title">Style Tips Every Woman Should Know</div>
              </div>
            </div>
            <div className="widget-body">
              <div className="widget-thumb">
                <img src={process.env.PUBLIC_URL + '/images/02.jpg'} alt="editor picks"/>
              </div>
              <div className="widget-small-desc">
                  <div className="widget-cats">Fashion</div>
                  <div className="widget-title">Style Tips Every Woman Should Know</div>
              </div>
            </div>
            <div className="widget-body">
              <div className="widget-thumb">
                <img src={process.env.PUBLIC_URL + '/images/03.jpg'} alt="editor picks"/>
              </div>
              <div className="widget-small-desc">
                  <div className="widget-cats">Fashion</div>
                  <div className="widget-title">Style Tips Every Woman Should Know</div>
              </div>
            </div>
            <div className="widget-body">
              <div className="widget-thumb">
                <img src={process.env.PUBLIC_URL + '/images/04.jpg'} alt="editor picks"/>
              </div>
              <div className="widget-small-desc">
                  <div className="widget-cats">Fashion</div>
                  <div className="widget-title">Style Tips Every Woman Should Know</div>
              </div>
            </div>
          </div>

          <div className="widget_container">
            <div className="widget-heading">
              <span>Join Us</span>
            </div>
            <div className="widget-body">
              <div className="widget-social">
                <div className="icon-container">
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                  <p>Youtube 20K</p>
                </div>                
                <div className="icon-container"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
              </div>
            </div>
            <div className="widget-body">
              <div className="widget-social">
                <div className="icon-container">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                  <p>Facebook 20K</p>
                </div>                
                <div className="icon-container"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
              </div>
            </div>
            <div className="widget-body">
              <div className="widget-social">
                <div className="icon-container">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                  <p>Twitter 20K</p>
                </div>                
                <div className="icon-container"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
              </div>
            </div>
            <div className="widget-body">
              <div className="widget-social">
                <div className="icon-container">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                  <p>Linkedin 20K</p>
                </div>                
                <div className="icon-container"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
              </div>
            </div>
            <div className="widget-body">
              <div className="widget-social">
                <div className="icon-container">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                  <p>Instagram 20K</p>
                </div>                
                <div className="icon-container"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
              </div>
            </div>
            <div className="widget-body">
              <div className="widget-social">
                <div className="icon-container">
                  <i class="fa fa-github" aria-hidden="true"></i>
                  <p>Github 20K</p>
                </div>                
                <div className="icon-container"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
              </div>
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