import React from "react";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Allinone from "../../../Image/Icon/Allinone.png";
import Easy from "../../../Image/Icon/Easy.png";
import Secure from "../../../Image/Icon/Secure.png";
import Logo from "../../../Image/Logo/KnotLogo.png";
import "../../Pages/Style/Style.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-section-top">
                <section className="logo-area">
                    <img src={Logo} alt="" />
                    <h3>
                        Build and sell extensions for <br /> Zoho products.
                    </h3>
                    <div className="icon">
                        <AiFillFacebook />
                        <AiFillInstagram />
                        <AiFillLinkedin />
                        <AiFillYoutube />
                    </div>
                </section>
                <section className="additional-link-area">
                    <h2>Additional Link</h2>
                    <div className="link">
                        <ul>
                            <li>
                                <Link to="/about">About us</Link> <br />
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link> <br />
                            </li>
                            <li>
                                <Link to="/">FAQ</Link> <br />
                            </li>
                            <li>
                                <Link to="/">Payment Method</Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="contact-area">
                    <h2>Contact Us</h2>
                    <p>
                        Address: Mirpur - 1207, Dhaka <br />
                        Division, Bangladesh
                    </p>
                    <p>Phone: 0123456789</p>
                    <p>Email: info@knot.com</p>
                </section>
                <section className="newsletter-area">
                    <h2>Newsletter</h2>
                    <form>
                        <label htmlFor="email">Email</label> <br />
                        <input
                            className="newsletter-input"
                            type="email"
                            name="email"
                            id=""
                            placeholder="Your Email"
                        />{" "}
                        <br />
                        <input
                            className="newsletter-send-btn"
                            type="submit"
                            value="Send"
                        />
                    </form>
                </section>
            </div>
            <div className="footer-section-top-sm-md">
                <div className="Easy-to-use">
                    <div class="collapse">
                        <input type="checkbox" />
                        <div class="collapse-title text-xl font-medium">
                            <img src={Easy} alt="" />
                            <p>Easy to use</p>
                        </div>
                        <div class="collapse-content">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Suscipit, in.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="Secure-Database">
                    <div class="collapse">
                        <input type="checkbox" />
                        <div class="collapse-title text-xl font-medium">
                            <img src={Secure} alt="" />
                            <p>Secure Database</p>
                        </div>
                        <div class="collapse-content">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Suscipit, in.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="One-Step-Solution">
                    <div class="collapse">
                        <input type="checkbox" />
                        <div class="collapse-title text-xl font-medium">
                            <img src={Allinone} alt="" />
                            <p>One Step Solution</p>
                        </div>
                        <div class="collapse-content">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Suscipit, in.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-section-bottom text-center">
                <p>
                    Copyright © {new Date().getFullYear()} Knot Corporation Pvt.
                    Ltd. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
