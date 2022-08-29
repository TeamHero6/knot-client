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
        <div className="bg-[#333333] pt-8">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                <section className="text-white hidden md:flex mx-auto">
                    <div className="text-3xl mr-2">
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
                        <img className="w-1/2" src={Logo} alt="" />
                        <p>Build and sell extensions for <br /> Knot products.</p>
                    </div>
                </section>
                <section className="text-white mx-auto sm:mx-0">
                    <h2 className="mb-2">Additional Link</h2>
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
                                <Link to="/TermsAndConditions">Terms and Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="text-white">
                    <h2 className="mb-2">Contact Us</h2>
                    <p>
                        Address: Mirpur - 1207, Dhaka <br />
                        Division, Bangladesh
                    </p>
                    <p>Phone: 0123456789</p>
                    <p>Email: info@knot.com</p>
                </section>
            </div>
            <div className="footer-section-bottom text-center mt-4">
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
