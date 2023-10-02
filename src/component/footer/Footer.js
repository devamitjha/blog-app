import React from 'react';
import Hero from '../../component/hero/Hero';
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="copyright">Copyright © 2023 Devamit | Powered by ReactJs.</div>
        <div className="social">
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-github" aria-hidden="true"></i>
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer