import React, { useEffect } from "react";

import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// import "./TestimonialSlider.css";

const TestimonialSlider = () => {
    useEffect(() => {
        const swiper = new Swiper(".swiper-slider", {
            slidesPerView: 1,
            speed: 500,
            grabCursor: true,
            freeMode: false,
            // loop: true,
            mousewheel: false,
            keyboard: {
                enabled: true,
            },
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false,
            // },
            pagination: {
                el: ".swiper-pagination",
                dynamicBullets: false,
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
            },
        });

        return () => {
            swiper.destroy(true, true);
        };
    }, []);
    return (
        <section className="section slider-section">
            <div className="slideContainer slider-column">
                <div className="swiper swiper-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="sw_Cnt">
                                <div className="auth">
                                    <div className="auth_avtar">
                                        <img src="assets/images/avtar.png" alt="avtar"></img>
                                    </div>
                                    <div className="auth_details">
                                        <span className="auth_N">Shivam Goel</span>
                                        <span className="auth_D">Managing director, Creation furnishings</span>
                                    </div>
                                </div>
                                <div className="quote">
                                    <p>
                                        "Working with Project D has been a game-changer for our
                                        business. Their social media strategies have significantly
                                        increased our online presence, resulting in a steady stream
                                        of new customers. They truly understand our target audience
                                        and consistently deliver engaging content that resonates
                                        with them. Highly recommended!"
                                    </p>
                                </div>
                                <div className="auth_brand">
                                    <img src="assets/images/brand.png"></img>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="sw_Cnt">
                                <div className="auth">
                                    <div className="auth_avtar">
                                        <img src="assets/images/avtar.png" alt="avtar"></img>
                                    </div>
                                    <div className="auth_details">
                                        <span className="auth_N">Shivam Goel</span>
                                        <span className="auth_D">Managing director, Creation furnishings</span>
                                    </div>
                                </div>
                                <div className="quote">
                                    <p>
                                        "Working with Project D has been a game-changer for our
                                        business. Their social media strategies have significantly
                                        increased our online presence, resulting in a steady stream
                                        of new customers. They truly understand our target audience
                                        and consistently deliver engaging content that resonates
                                        with them. Highly recommended!"
                                    </p>
                                </div>
                                <div className="auth_brand">
                                    <img src="assets/images/brand.png"></img>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="sw_Cnt">
                                <div className="auth">
                                    <div className="auth_avtar">
                                        <img src="assets/images/avtar.png" alt="avtar"></img>
                                    </div>
                                    <div className="auth_details">
                                        <span className="auth_N">Shivam Goel</span>
                                        <span className="auth_D">Managing director, Creation furnishings</span>
                                    </div>
                                </div>
                                <div className="quote">
                                    <p>
                                        "Working with Project D has been a game-changer for our
                                        business. Their social media strategies have significantly
                                        increased our online presence, resulting in a steady stream
                                        of new customers. They truly understand our target audience
                                        and consistently deliver engaging content that resonates
                                        with them. Highly recommended!"
                                    </p>
                                </div>
                                <div className="auth_brand">
                                    <img src="assets/images/brand.png"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </section>
    );
};

export default TestimonialSlider;
