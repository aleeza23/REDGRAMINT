import React, { Fragment } from "react";
import Footer from "../compoenents/Footer"; // Fixed typo: components
import Navbar from "../compoenents/Header"; // Fixed typo: components
import styles from "../assets/styles/ConfirmOrder.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useWixContext } from "../context/wixContext";
import { media as wixMedia } from '@wix/sdk';
import emailjs from 'emailjs-com';
import { useAlert } from "react-alert"
import { img } from "framer-motion/m";

const ConfirmOrder = () => {
    const navigate = useNavigate();
    const { formData, cart } = useWixContext();
    const alert = useAlert()

    // Calculate subtotal from the cart
    const subtotal = cart?.lineItems?.reduce((acc, item) => acc + item.quantity * item.price.amount, 0).toFixed(2);

    const handlePlaceOrder = async () => {
        // Prepare email data
        const orderDetails = cart.lineItems.map(item => ({
            productName: item.productName?.original,
            quantity: item.quantity,
            imageUrl: item.image,
            totalPrice: `₨${item.price.amount}`
        }));

        const emailData = {
            // to_email: formData.email, // Add user's email from formData
            from_name: formData.name,
            address: formData.address,
            phone: formData.phone,
            items: orderDetails,
            total: subtotal
        };


        try {
            // Initialize EmailJS with your public key (if needed)
            emailjs.init('vzqjOttanPtAGVXWB'); // Initialize with your actual public key

            // Send email using EmailJS
            const response = await emailjs.send('service_piylrr8', 'template_ifdlaoj', emailData, 'W9DUCVYUh_GJvPgxI');
            alert.success('Order Placed!');

            // Redirect to success page
            navigate('/success');
        } catch (error) {
            console.error('Error sending email:', error);
        }

    }
    return (
        formData && <Fragment>
            <Navbar />
            <div className={styles.confirm}>
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-lg-8 mt-3 order-confirm">
                            <h4 className="mb-3">Shipping Info</h4>
                            <b>Name: </b>
                            <span className="font-light">{formData.name}</span>
                            <br />
                            <b>Phone: </b> <span className="font-light">{formData.phone}</span>
                            <br />
                            <b className="mb-4">Address:</b>
                            <span>{formData.address}</span>

                            <hr />
                            <h4 className="mt-4">Your Cart Items:</h4>

                            {cart?.lineItems?.length > 0 ? (
                                <div className="cart-images">
                                    <div className="row">
                                        {cart?.lineItems?.map((item) => (
                                            <div className="col-4 col-lg-2" key={item.id}>
                                                <img
                                                    src={wixMedia.getScaledToFillImageUrl(item.image, 72, 96, {})}
                                                    alt={item.productName?.original} // Alt text for accessibility
                                                    height="100" // Adjust height as necessary
                                                    width="100" // Adjust width as necessary
                                                    className={styles.cartImage} // Optional: add your own styling
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <p>Your cart is empty.</p>
                            )}
                        </div>

                        <div className="col-12 col-lg-3 my-4">
                            <div className={styles.order_summary}>
                                <h4>Order Summary</h4>
                                <hr />
                                <p>
                                    Subtotal:
                                    <span className="ms-3">PKR {subtotal}</span>
                                </p>
                                <p>
                                    Shipping:
                                    <span className="ms-3">PKR 0.00</span>
                                </p>
                                <p>
                                    Tax:
                                    <span className="ms-3">PKR 0.00</span>
                                </p>

                                <hr />

                                <p>
                                    Total:
                                    <span className="ms-3">PKR {subtotal}</span>
                                </p>

                                <hr />
                                <button id="checkout_btn" onClick={handlePlaceOrder}>
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default ConfirmOrder;
