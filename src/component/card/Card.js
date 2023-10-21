import React from 'react';
import "./Card.scss";
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="blog_card_container">
            <div className="card">
                <div className="card_image">
                  <Link to="post/1"><img src={process.env.PUBLIC_URL + '/images/posts/1.jpg'} alt="fashion"/></Link>
                  <Link className="label fashion" to="category/fashion">Fashion</Link>
                </div>
                <div className="card_containent">
                  <Link to="post/1"><div className="card_header">How Lovely Yellow is! It Stands for the Sun</div></Link>
                  <div className="card_content">
                    <div className="entry_meta">
                      <Link className="meta_item meta_author" to="/author/devamit">Devamit</Link>
                      <div className="meta_item meta_date">10 days ago</div>
                       <Link to="post/1" className="meta_item meta_more">Read More</Link>
                    </div>
                    <div className="entry_excerpt line_clamp"> Venus has a runaway greenhouse effect. I kind of want to know what happened there because we’re twirling knobs here on Earth without knowing the consequences of it. Mars once</div>
                  </div>
                </div>
            </div>
            <div className="card">
                <div className="card_image">
                  <Link to="post/1"><img src={process.env.PUBLIC_URL + '/images/posts/2.jpg'} alt="fashion"/></Link>
                  <Link className="label fashion" to="category/fashion">Fashion</Link>
                </div>
                <div className="card_containent">
                  <Link to="post/1"><div className="card_header">How Lovely Yellow is! It Stands for the Sun</div></Link>
                  <div className="card_content">
                    <div className="entry_meta">
                      <Link className="meta_item meta_author" to="/author/devamit">Devamit</Link>
                      <div className="meta_item meta_date">10 days ago</div>
                       <Link to="post/1" className="meta_item meta_more">Read More</Link>
                    </div>
                    <div className="entry_excerpt line_clamp"> Venus has a runaway greenhouse effect. I kind of want to know what happened there because we’re twirling knobs here on Earth without knowing the consequences of it. Mars once</div>
                  </div>
                </div>
            </div>
            <div className="card">
                <div className="card_image">
                  <Link to="post/1"><img src={process.env.PUBLIC_URL + '/images/posts/3.jpg'} alt="fashion"/></Link>
                  <Link className="label fashion" to="category/fashion">Fashion</Link>
                </div>
                <div className="card_containent">
                  <Link to="post/1"><div className="card_header">How Lovely Yellow is! It Stands for the Sun</div></Link>
                  <div className="card_content">
                    <div className="entry_meta">
                      <Link className="meta_item meta_author" to="/author/devamit">Devamit</Link>
                      <div className="meta_item meta_date">10 days ago</div>
                       <Link to="post/1" className="meta_item meta_more">Read More</Link>
                    </div>
                    <div className="entry_excerpt line_clamp"> Venus has a runaway greenhouse effect. I kind of want to know what happened there because we’re twirling knobs here on Earth without knowing the consequences of it. Mars once</div>
                  </div>
                </div>
            </div>
            <div className="card">
                <div className="card_image">
                  <Link to="post/1"><img src={process.env.PUBLIC_URL + '/images/posts/4.jpg'} alt="fashion"/></Link>
                  <Link className="label fashion" to="category/fashion">Fashion</Link>
                </div>
                <div className="card_containent">
                  <Link to="post/1"><div className="card_header">How Lovely Yellow is! It Stands for the Sun</div></Link>
                  <div className="card_content">
                    <div className="entry_meta">
                      <Link className="meta_item meta_author" to="/author/devamit">Devamit</Link>
                      <div className="meta_item meta_date">10 days ago</div>
                       <Link to="post/1" className="meta_item meta_more">Read More</Link>
                    </div>
                    <div className="entry_excerpt line_clamp"> Venus has a runaway greenhouse effect. I kind of want to know what happened there because we’re twirling knobs here on Earth without knowing the consequences of it. Mars once</div>
                  </div>
                </div>
            </div>
          </div>
  )
}

export default Card