import React from 'react';
import "./LoginRegister.scss"
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <section className="signup">
        <div className="container">
            <div className="signup-content">
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
                            <label className="label" for="email">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </label>
                            <input className="custome-input" type="email" name="email" id="email" placeholder="Your Email"/>
                        </div>
                        <div className="form-group">
                            <label className="label" for="pass">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </label>
                            <input className="custome-input" type="password" name="pass" id="pass" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <label className="label" for="re-pass">
                                <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                            </label>
                            <input className="custome-input" type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                        </div>
                        <label class="custome-checkbox">
                            <div className="checkbox-wrapper">
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                            </div>
                            <div className="term-service">I agree all statements in Terms of service</div>
                        </label>
                        <div className="form-group form-button">
                            <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                        </div>
                    </form>
                </div>
                <div className="signup-image">                
                    <figure><img src={process.env.PUBLIC_URL + '/images/signup-image.jpg'} alt="signup"/></figure>
                    <Link to="/user/login" className="signup-image-link">I am already member</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register
