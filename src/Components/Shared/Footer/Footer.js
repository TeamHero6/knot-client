import React from "react";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../../Image/Logo/KnotLogo.png";
import "../../Pages/Style/Style.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-section-top ">
                <section className="logo-area mx-auto">
                    <div className="icon">
                        <a href="https://www.facebook.com/">
                            <AiFillFacebook />
                        </a>
                        <a href="https://www.instagram.com/">
                            <AiFillInstagram />
                        </a>
                        <a href="https://www.linkedin.com/">
                            <AiFillLinkedin />
                        </a>
                        <a href="https://www.youtube.com/">
                            <AiFillYoutube />
                        </a>
                    </div>
                    <div>
                        <img src={Logo} alt="" />
                        <h3>
                            Build and sell extensions for <br /> Knot products.
                        </h3>
                    </div>
                </section>
                <section className="additional-link-area mx-auto">
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
                                <Link to="/FAQ">FAQ</Link> <br />
                            </li>
                            <li>
                                <Link to="/">Payment Policy</Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="contact-area mx-auto">
                    <h2>Contact Us</h2>
                    <p>
                        Address: Mirpur - 1207, Dhaka <br />
                        Division, Bangladesh
                    </p>
                    <p>Phone: 0123456789</p>
                    <p>Email: info@knot.com</p>
                </section>
            </div>
            <div className="footer-section-top-sm-md">
                <div className="Easy-to-use">
                    <div className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            <h2>Additional Link</h2>
                        </div>
                        <div className="collapse-content">
                            <div className="link">
                                <ul>
                                    <li>
                                        <Link to="/about">About us</Link> <br />
                                    </li>
                                    <li>
                                        <Link to="/blog">Blog</Link> <br />
                                    </li>
                                    <li>
                                        <Link to="/FAQ">FAQ</Link> <br />
                                    </li>
                                    <li>
                                        <Link to="/">Payment Method</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Secure-Database">
                    <div className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="collapse-content">
                            <section className="contact-area">
                                <h4>
                                    Address: Mirpur - 1207, Dhaka <br />
                                    Division, Bangladesh
                                </h4>
                                <h4>Phone: 0123456789</h4>
                                <h4>Email: info@knot.com</h4>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-section-bottom text-center">
                <p>
                    Copyright © {new Date().getFullYear()} Knot Corporation Pvt.
                    Ltd. All Rights Reserved.
                </p>
                <div className="icon">
                    <a href="https://www.facebook.com/">
                        <AiFillFacebook />
                    </a>
                    <a href="https://www.instagram.com/">
                        <AiFillInstagram />
                    </a>
                    <a href="https://www.linkedin.com/">
                        <AiFillLinkedin />
                    </a>
                    <a href="https://www.youtube.com/">
                        <AiFillYoutube />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
