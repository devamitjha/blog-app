import React from 'react';
import "./Sidebar.scss";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar_container"> 
        <div className="widget_container">
          <div className="widget-heading">
            <h4>Editor Picks</h4>
            <Link to="/category/fashion">View All</Link>
          </div>
          <div className="widget-body">
            <div className="widget-thumb">
              <Link to="post/1"><img src={process.env.PUBLIC_URL + '/images/01.jpg'} alt="editor picks"/></Link>
            </div>
            <div className="widget-small-desc">
                <Link to="/category/fashion" className="widget-cats">Fashion</Link>
                <Link to="/post/1" className="widget-title">Style Tips Every Woman Should Know</Link>
            </div>
          </div>
          <div className="widget-body">
            <div className="widget-thumb">
              <Link to="post/1"><img src={process.env.PUBLIC_URL + '/images/02.jpg'} alt="editor picks"/></Link>
            </div>
            <div className="widget-small-desc">
                <Link to="/category/fashion" className="widget-cats">Fashion</Link>
                <Link to="/post/1" className="widget-title">Style Tips Every Woman Should Know</Link>
            </div>
          </div>
          <div className="widget-body">
            <div className="widget-thumb">
              <Link to="post/1"><img src={process.env.PUBLIC_URL + '/images/03.jpg'} alt="editor picks"/></Link>
            </div>
            <div className="widget-small-desc">
                <Link to="/category/fashion" className="widget-cats">Fashion</Link>
                <Link to="/post/1" className="widget-title">Style Tips Every Woman Should Know</Link>
            </div>
          </div>
          <div className="widget-body">
            <div className="widget-thumb">
              <Link to="post/1"><img src={process.env.PUBLIC_URL + '/images/04.jpg'} alt="editor picks"/></Link>
            </div>
            <div className="widget-small-desc">
                <Link to="/category/fashion" className="widget-cats">Fashion</Link>
                <Link to="/post/1" className="widget-title">Style Tips Every Woman Should Know</Link>
            </div>
          </div>
        </div>
        <div className="widget_container">
          <div className="widget-heading">
            <h4>Join Us</h4>
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
            <h4>Recent</h4>
            <Link to="/category/fashion">View All</Link>
          </div>
          <div className="widget-body big">
            <div className="widget-thumb">
              <Link to="post/1"><img src={process.env.PUBLIC_URL + '/images/01.jpg'} alt="editor picks"/></Link>
               <Link to="/category/fashion" className="widget-cats">Fashion</Link>
            </div>
            <div className="widget-small-desc">               
                <Link to="/post/1" className="widget-title">Style Tips Every Woman Should Know</Link>
            </div>
            <div className="meta-date">3 years ago</div>
          </div>
        </div>
        <div className="widget_container">
          <div className="widget-heading">
            <h4>Newsletter</h4>
          </div>
          <div className="widget-body newsletter">           
            <div className="widget-small-desc">               
                <div className="widget-disc">Get the latest creative news from Gello magazine</div>
            </div>
            <div className="custom-mailchimp">
              <input type="email" name="EMAIL" placeholder="Your email address" required="" className="input"/>
              <input type="submit" value="Sign up" className="submit-btn"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar