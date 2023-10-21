import React from 'react';
import "./Hero.scss";
import "../../slick/slick.scss"; 
import "../../slick/slick-theme.scss"; 
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll:4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll:3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
      }
    ]
  };
  return (
    <div className="heroSlider">
      <Slider {...settings}>
            <div className="item">
              <div className="item_details">
                <img src={process.env.PUBLIC_URL + '/images/hero/1.jpg'} alt="fashion"/>
                <div className="item_content">
                  <div className="label fashion">
                    <Link to="/category/fashion">Fashion</Link>
                  </div>
                  <div className="title">
                    <Link to="/post/1">How Lovely Yellow is! It Stands for the Sun</Link>
                  </div>
                  <div className="dateTime">September 20, 2023</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item_details">
                <img src={process.env.PUBLIC_URL + '/images/hero/2.jpg'} alt="fashion"/>
                <div className="item_content">
                  <div className="label fashion">
                    <Link to="/category/fashion">Fashion</Link>
                  </div>
                  <div className="title">
                    <Link to="/post/1">The Trend of Women's Clothing</Link>
                  </div>
                  <div className="dateTime">September 20, 2023</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item_details">
                <img src={process.env.PUBLIC_URL + '/images/hero/3.jpg'} alt="fashion"/>
                <div className="item_content">
                  <div className="label fashion">
                    <Link to="/category/fashion">Fashion</Link>
                  </div>
                  <div className="title">
                    <Link to="/post/1">Summer Men's Fashion Trends</Link>
                  </div>
                  <div className="dateTime">September 20, 2023</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item_details">
                <img src={process.env.PUBLIC_URL + '/images/hero/4.jpg'} alt="fashion"/>
                <div className="item_content">
                  <div className="label fashion">
                    <Link to="/category/fashion">Fashion</Link>
                  </div>
                  <div className="title">
                    <Link to="/post/1">Style Tips Every Woman Should Know</Link>
                  </div>
                  <div className="dateTime">September 20, 2023</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item_details">
                <img src={process.env.PUBLIC_URL + '/images/hero/5.jpg'} alt="fashion"/>
                <div className="item_content">
                  <div className="label fashion">
                    <Link to="/category/fashion">Fashion</Link>
                  </div>
                  <div className="title">
                    <Link to="/post/1">How Lovely Yellow is! It Stands for the Sun</Link>
                  </div>
                  <div className="dateTime">September 20, 2023</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item_details">
                <img src={process.env.PUBLIC_URL + '/images/hero/6.jpg'} alt="fashion"/>
                <div className="item_content">
                  <div className="label fashion">
                    <Link to="/category/fashion">Fashion</Link>
                  </div>
                  <div className="title">
                    <Link to="/post/1">Style Tips Every Woman Should Know</Link>
                  </div>
                  <div className="dateTime">September 20, 2023</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item_details">
                <img src={process.env.PUBLIC_URL + '/images/hero/7.jpg'} alt="fashion"/>
                <div className="item_content">
                  <div className="label fashion">
                    <Link to="/category/fashion">Fashion</Link>
                  </div>
                  <div className="title">
                    <Link to="/post/1">How Lovely Yellow is! It Stands for the Sun</Link>
                  </div>
                  <div className="dateTime">September 20, 2023</div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item_details">
                <img src={process.env.PUBLIC_URL + '/images/hero/8.jpg'} alt="fashion"/>
                <div className="item_content">
                  <div className="label fashion">
                    <Link to="/category/fashion">Fashion</Link>
                  </div>
                  <div className="title">
                    <Link to="/post/1">Style Tips Every Woman Should Know</Link>
                  </div>
                  <div className="dateTime">September 20, 2023</div>
                </div>
              </div>
            </div>
      </Slider>
    </div>
  )
}

export default Hero