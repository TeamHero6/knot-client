import React from 'react';
import '../../Pages/Style/Style.css'
import IntroImg from '../../../Image/Image/Intro.png'

const Intro = () => {
    return (
        <div className='intro-container'>
            <section className='intro-area-header-text text-center'>
                <h1>Trusted by more than 75 million users globally</h1>
            </section>
            <section className='intro-video-text'>
                <div className="intro-video">
                    <img src={IntroImg} alt="" />
                </div>
                <div className="intro-text">
                    <h2>Partner with Knot</h2>
                    <p>Knot partners with top notch <br /> VARs, MSPs, SIs, consultants and <br /> technology partners.</p>
                </div>
            </section>
        </div>
    );
};

export default Intro;