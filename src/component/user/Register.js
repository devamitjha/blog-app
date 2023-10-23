import React from 'react';
import "./LoginRegister.scss"

const Register = () => {
  return (
    <section className="signup">
        <div className="container">
            <div className="signup-content">
                <div className="signup-form">
                    <h2 className="form-title">Sign up</h2>
                    <form method="POST" className="register-form" id="register-form">
                        <div className="form-group">
                            <label for="name">
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </label>
                            <input type="text" name="name" id="name" placeholder="Your Name"/>
                        </div>
                        <div className="form-group">
                            <label for="email">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </label>
                            <input type="email" name="email" id="email" placeholder="Your Email"/>
                        </div>
                        <div className="form-group">
                            <label for="pass">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </label>
                            <input type="password" name="pass" id="pass" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <label for="re-pass">
                                <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                            </label>
                            <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                        </div>
                        <div className="form-group">
                            <input type="checkbox" name="agree-term" id="agree-term" className="agree-term"/>
                            <label for="agree-term" className="label-agree-term">
                                <span><span></span></span>I agree all statements in 
                                <a href="#" className="term-service">Terms of service</a>
                            </label>
                        </div>
                        <div className="form-group form-button">
                            <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                        </div>
                    </form>
                </div>
                <div className="signup-image">                
                    <figure><img src={process.env.PUBLIC_URL + '/images/signup-image.jpg'} alt="signup"/></figure>
                    <a href="#" className="signup-image-link">I am already member</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register
