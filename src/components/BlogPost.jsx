import React, { useEffect } from 'react';
import "./blogpost.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const BlogPost = () => {
    // useEffect(() => {
    //     const initializeCursor = () => {
    //         const links = document.querySelectorAll('a');
    //         const cursor = document.querySelector('[data-cursor="1"]');

    //         links.forEach(link => {
    //             link.addEventListener('mouseenter', () => {
    //                 cursor.classList.add('cursor-hover--a');
    //             });

    //             link.addEventListener('mouseleave', () => {
    //                 cursor.classList.remove('cursor-hover--a');
    //             });
    //         });
    //     };

    //     initializeCursor();

    //     // Clean up event listeners when the component unmounts
    //     return () => {
    //         const links = document.querySelectorAll('a');

    //         links.forEach(link => {
    //             link.removeEventListener('mouseenter', () => { });
    //             link.removeEventListener('mouseleave', () => { });
    //         });
    //     };
    // }, []);
    return (
        <>
            <Header></Header>
            <div className='blogPost__Wrap'>
                <div className='port_Mn-back'>
                    <button>
                        <span className='back_logo'><img src='assets/images/back.png'></img></span>
                        Back to blog
                    </button>
                </div>
                <div className='blog_post-sec'>
                    <div className='blog_p-ttl'>
                        <h2>How to create SVG-ready icon symbols in Sketch</h2>
                        <div className='blog_p-dt'>
                            <span>Oct 25, 2024</span>
                            <span>By John Conor</span>
                        </div>
                    </div>
                    <div className='blog_p-img'>
                        <img src='assets/images/blog_p1.png'></img>
                    </div>
                    <div className='blog_p-para'>
                        <div className='bl_p-row'>
                            <p>Nayzak, everyone in my team works towards the samegoal.
                                This enabled our teams to ship new ideas and feel more capable.
                                Podcasting operational — change management inside of workflows.
                                Completely synergize.
                                <br></br><br></br>
                                On the other hand, we denounce with righteous indignation and
                                dislike men who are so beguiled and demoralized by the charms
                                of pleasure of the moment, so blinded by desire.
                            </p>
                            <p>
                                Nayzak, everyone in my team works towards the samegoal.
                                This enabled our teams to ship new ideas and feel more capable.
                                Podcasting operational — change management inside of workflows.
                                Completely synergize.
                                <br></br><br></br>
                                But I must explain to you how all this mistaken idea of
                                denouncing pleasure and praising pain was born and I will
                                give you a complete account of the system, and expound the
                                actual teachings of the great explorer of the truth.
                            </p>
                        </div>
                    </div>
                    <div className='blog_p-img'>
                        <img src='assets/images/blog_p2.png'></img>
                    </div>
                    <div className='blog_p-cnt'>
                        <h3>Keep your everyday on trend</h3>
                        <p>
                            Nayzak, everyone in my team works towards the samegoal.
                            This enabled our teams to ship new ideas and feel more capable.
                            Podcasting operational — change management inside of workflows.
                            Completely synergize.
                            <br></br><br></br>
                            But I must explain to you how all this mistaken idea of
                            denouncing pleasure and praising pain was born and I will
                            give you a complete account of the system, and expound the
                            actual teachings of the great explorer of the truth, the
                            master-builder of human happiness. No one rejects, dislikes,
                            or avoids pleasure itself
                        </p>
                    </div>
                    <div className='blog_quote'>
                        <div className='quote_icn'>
                            <img src='assets/images/quote.png'></img>
                        </div>
                        <div className='quote_para'>
                            <p>Nayzak, everyone in my team works towards the samegoal.
                                This enabled our teams to ship new ideas and feel more capable.
                                Podcasting operational
                            </p>
                        </div>
                        <div className='quote_auth'>
                            — Carl Sagan
                        </div>
                    </div>
                    <div className='blog_ext-para'>
                        <p>
                            Nayzak, everyone in my team works towards the samegoal.
                            This enabled our teams to ship new ideas and feel more capable.
                            Podcasting operational — change management inside of workflows.
                            Completely synergize.
                            <br></br><br></br>
                            But I must explain to you how all this mistaken idea of
                            denouncing pleasure and praising pain was born and I will
                            give you a complete account of the system, and expound the
                            actual teachings of the great explorer of the truth,
                            the master-builder of human happiness. No one rejects,
                            dislikes, or avoids pleasure itself
                        </p>
                    </div>
                    <div className='blog_post-others'>
                        <div className='blog_other-ttl'>
                            <h3>You might also like...</h3>
                        </div>
                        <div className='blog_card-wrap'>
                            <div className='blog-row'>
                                <div className='blog_col'>
                                    <div className='blog_con'>
                                        <div className='blog_img'>
                                            <img src="assets/images/blog5.png" alt="blog1" />
                                        </div>
                                        <div className='blog_content'>
                                            <span className='bl-dt'>October 12, 2024</span>
                                            <span className='bl-ttl'>Blueprint fidelity: between paper prototype and finished product</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='blog_col'>
                                    <div className='blog_con'>
                                        <div className='blog_img'>
                                            <img src="assets/images/blog6.png" alt="blog1" />
                                        </div>
                                        <div className='blog_content'>
                                            <span className='bl-dt'>October 12, 2024</span>
                                            <span className='bl-ttl'>Introducing: A brand new Dribbble</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='blog-row'>
                                <div className='blog_col'>
                                    <div className='blog_con'>
                                        <div className='blog_img'>
                                            <img src="assets/images/blog7.png" alt="blog1" />
                                        </div>
                                        <div className='blog_content'>
                                            <span className='bl-dt'>October 12, 2024</span>
                                            <span className='bl-ttl'>Design critiques at Figma</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='blog_col'>
                                    <div className='blog_con'>
                                        <div className='blog_img'>
                                            <img src="assets/images/blog8.png" alt="blog1" />
                                        </div>
                                        <div className='blog_content'>
                                            <span className='bl-dt'>October 12, 2024</span>
                                            <span className='bl-ttl'>20 psychological principles applied to product design</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>

    )
}

export default BlogPost