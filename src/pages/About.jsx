import React, { Fragment } from "react";
import {
    FcAutomotive,
    FcCurrencyExchange,
    FcCustomerSupport,
    FcRating,
} from "react-icons/fc";
import Footer from "../compoenents/Footer";
import Navbar from "../compoenents/Header";
import styles from "../assets/styles/About.module.scss";

const About = () => {
    const abouts = [
        {
            icon: <FcAutomotive size={60} />,
            title: "Free Delivery",
            description: "We offer high-quality leather products with reliable and timely delivery.",
        },
        {
            icon: <FcCurrencyExchange size={60} />,
            title: "100% Cash Back",
            description: "Enjoy a full cash-back guarantee on our premium leather items.",
        },
        {
            icon: <FcRating size={60} />,
            title: "Quality Product",
            description: "Our leather products are crafted to meet the highest standards of quality.",
        },
        {
            icon: <FcCustomerSupport size={60} />,
            title: "24/7 Support",
            description: "Receive round-the-clock support for all your leather product inquiries.",
        },
    ];
    
    
    return (
        <Fragment>
            <Navbar />
            <div className={styles.about}>
                <div className={styles.about_title}>
                    <div className="container">
                        <h3>About Us</h3>
                    </div>
                </div>
                <div className={styles.about_info}>
                    <div className="container mb-5">
                        <div className="row g-3 p-3">
                            <div className="col-md-6">
                                <div className={styles.image}>
                                    <img
                                        src="https://res.cloudinary.com/mehedi08h/image/upload/v1648616684/shopx/blog_post_3_wchde0.jpg"
                                        alt="About"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={styles.info}>
                                    <h4>
                                        Know About Our Ecomerce Business,
                                        History
                                    </h4>
                                    <p>
                                    We offer premium leather hats that combine durability with timeless style, providing superior comfort and elegance for any occasion. Our exquisite leather jackets are designed for both fashion and function, ensuring unmatched quality and a sophisticated look. For equestrian enthusiasts, our horse riding accessories are crafted for reliability and comfort, so you can ride with confidence.
                                    </p>
                                    <a href="https://wa.me/03080123011" target="_blank" rel="noopener noreferrer">
                                        <button>Contact Us</button>
                                    </a>

                                </div>
                            </div>
                        </div>

                        <div className={styles.features}>
                            <h3 className="text-center">Our Features</h3>

                            <div className="row g-3">
                                <div className="col-md-10 col-md-offset-2 mx-auto">
                                    <div className="row mt-4">
                                        {abouts.map((about, index) => (
                                            <div
                                                className="col-md-3"
                                                key={index}
                                            >
                                                <div className={styles.feature}>
                                                    <span> {about.icon}</span>
                                                    <h5>{about.title}</h5>
                                                    <p>{about.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default About;
