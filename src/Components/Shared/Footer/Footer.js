import React from 'react';
import Logo from '../../../Image/Logo/KnotLogo.png'
import '../../Pages/Style/Style.css'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="footer-container">
            <div className='footer-section-top'>
                <section className='logo-area'>
                    <img src={Logo} alt="" />
                    <h3>Build and sell extensions for <br /> Knot products.</h3>
                    <div className="icon">
                        <a href="https://www.facebook.com/"><AiFillFacebook /></a>
                        <a href="https://www.instagram.com/"><AiFillInstagram /></a>
                        <a href="https://www.linkedin.com/"><AiFillLinkedin /></a>
                        <a href="https://www.youtube.com/"><AiFillYoutube /></a>
                    </div>
                </section>
                <section className='additional-link-area'>
                    <h2>Additional Link</h2>
                    <div className="link">
                        <ul>
                            <li>
                                <Link to='/'>About us</Link> <br />
                                <Link to='/'>Blog</Link> <br />
                                <Link to='/'>FAQ</Link> <br />
                                <Link to='/'>Payment Method</Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className='contact-area'>
                    <h2>Contact Us</h2>
                    <p>Address: Mirpur - 1207, Dhaka <br />Division, Bangladesh</p>
                    <p>Phone: 0123456789</p>
                    <p>Email: info@knot.com</p>
                </section>
                <section className='newsletter-area'>
                    <h2>Newsletter</h2>
                    <form>
                        <label htmlFor="email">Email</label> <br />
                        <input className='newsletter-input' type="email" name="email" id="" placeholder='Your Email' /> <br />
                        <input className='newsletter-send-btn' type="submit" value="Send" />
                    </form>
                </section>
            </div>
            <div className="footer-section-top-sm-md">
                <div className="Easy-to-use">
                    <div class="collapse">
                        <input type="checkbox" />
                        <div class="collapse-title text-xl font-medium text-left">
                            <h2>Additional Link</h2 >
                        </div>
                        <div class="collapse-content link">
                            <ul>
                                <li>
                                    <Link to='/'>About us</Link> <br />
                                    <Link to='/'>Blog</Link> <br />
                                    <Link to='/'>FAQ</Link> <br />
                                    <Link to='/'>Payment Method</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Secure-Database">
                    <div class="collapse">
                        <input type="checkbox" />
                        <div class="collapse-title text-xl font-medium">
                            <h2>Contact Us</h2>
                        </div>
                        <div className='contact-area'>
                            <p>Address: Mirpur - 1207, Dhaka <br />Division, Bangladesh</p>
                            <p>Phone: 0123456789</p>
                            <p>Email: info@knot.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-section-bottom">
                <p>Copyright © {new Date().getFullYear()} Knot Corporation Pvt. Ltd. All Rights Reserved.</p>
                <br />
                <div className="icon">
                    <a href="https://www.facebook.com/"><AiFillFacebook /></a>
                    <a href="https://www.instagram.com/"><AiFillInstagram /></a>
                    <a href="https://www.linkedin.com/"><AiFillLinkedin /></a>
                    <a href="https://www.youtube.com/"><AiFillYoutube /></a>
                </div>
            </div>

        </div>
    );
};

export default Footer;