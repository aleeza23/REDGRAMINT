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
            description: "We manufacture high-quality sports equipment with timely delivery.",
        },
        {
            icon: <FcCurrencyExchange size={60} />,
            title: "100% Cash Back",
            description: "Enjoy a full cash-back guarantee on our sports products.",
        },
        {
            icon: <FcRating size={60} />,
            title: "Quality Product",
            description: "Our sports products are crafted to meet the highest quality standards.",
        },
        {
            icon: <FcCustomerSupport size={60} />,
            title: "24/7 Support",
            description: "Get round-the-clock support for all your sports equipment needs.",
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
                                        We are manufacturers of all kinds of above Items and can offer best quality above Items in most moderate prices. Our customers always appreciate our quality, reasonable prices and delivery service.
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
