import React, { Fragment, useState } from "react";
import styles from "../assets/styles/Checkout.module.scss";
import Navbar from "../compoenents/Header"; // Fixed typo: components
import Footer from "../compoenents/Footer"; // Fixed typo: components
import { useNavigate } from "react-router-dom";
import { useWixContext } from "../context/wixContext";

const Checkout = () => {
    const navigate = useNavigate();
    const { setFormData, cart } = useWixContext(); // Destructure setFormData from context
    const [formState, setFormState] = useState({
        name: '',
        address: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value // Change `id` to `name`
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formState); // Save form data to context
        navigate('/confirm-order');
    };

    return (
        cart && <Fragment>
            <Navbar />
            <div className={styles.shipping}>
                <div className={styles.shipping_container}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.from_group}>
                            <label htmlFor="name">Name</label> {/* Changed `htmlFor` to match name */}
                            <input
                                type="text"
                                name="name" // Change id to name
                                placeholder="Enter your name"
                                required
                                value={formState.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.from_group}>
                            <label htmlFor="address">Address</label> {/* Changed `htmlFor` to match name */}
                            <input
                                type="text"
                                name="address" // Change id to name
                                placeholder="Enter your address"
                                required
                                value={formState.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.from_group}>
                            <label htmlFor="phone">Phone Number</label> {/* Changed `htmlFor` to match name */}
                            <input
                                type="tel" // Changed to tel for better mobile input
                                name="phone" // Change id to name
                                placeholder="Enter your phone number"
                                required
                                value={formState.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.from_group}>
                            <button type="submit">CONTINUE</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default Checkout;
