import React from 'react';
import "./LoginRegister.scss";
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <section className="signup">
        <div className="container">
            <div className="signup-content">
                <div className="signup-image">                
                    <figure><img src={process.env.PUBLIC_URL + '/images/signin-image.jpg'} alt="signup"/></figure>
                    <Link to="/user/register" className="signup-image-link">Create an account</Link>
                </div>
                <div className="signup-form">
                    <h2 className="form-title">Sign up</h2>
                    <form method="POST" className="register-form" id="register-form">
                        <div className="form-group">
                            <label className="label" for="name">
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </label>
                            <input className="custome-input" type="text" name="name" id="name" placeholder="Your Name"/>
                        </div>
                        <div className="form-group">
                            <label className="label" for="pass">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </label>
                            <input className="custome-input" type="password" name="pass" id="pass" placeholder="Password"/>
                        </div>
                        <label class="custome-checkbox">
                            <div className="checkbox-wrapper">
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </div>
                            <div className="term-service">Remember me</div>
                        </label>
                        <div className="form-group form-button">
                            <input type="submit" name="login" id="login" className="form-submit" value="Login"/>
                        </div>
                    </form>
                    <div className="social-login">
                      <span class="social-label">Or login with</span>
                      <div className="socials">
                          <Link to="/" className="google"><i className="fa fa-google" aria-hidden="true"></i></Link>
                          <Link to="/" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                          <Link to="/" className="github"><i className="fa fa-github" aria-hidden="true"></i></Link>
                      </div>
                    </div>
                </div>                
            </div>
        </div>
    </section>
  )
}

export default Login