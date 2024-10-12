import React, { Fragment } from "react";
import styles from "../assets/styles/Cart.module.scss";
import Navbar from "../compoenents/Header";
import Footer from "../compoenents/Footer";
import { useNavigate } from "react-router-dom";
import { useWixContext } from "../context/wixContext";
import { media as wixMedia } from '@wix/sdk';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Cart = () => {
    const { cart, updateCartItemQuantity, removeCartItem, isLoading } = useWixContext();
    const navigate = useNavigate();

    const increaseQty = (productId) => {
        const item = cart.lineItems.find(item => item._id === productId);
        if (item) {
            updateCartItemQuantity([productId, item.quantity + 1]);
        }
    };

    const decreaseQty = (productId) => {
        const item = cart.lineItems.find(item => item._id === productId);
        if (item && item.quantity > 1) {
            updateCartItemQuantity([productId, item.quantity - 1]);
        }
    };

    const calculateSubtotal = () => {
        return cart?.lineItems?.reduce((acc, item) => acc + item.quantity * item.price.amount, 0).toFixed(2);
    };

    return (
        <Fragment>
            <Navbar />
            <div className={styles.cart}>
                <div className="container mt-3">
                    <div className="row g-3">
                        <div className="col-md-8">
                            <div className={styles.cart_container}>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h4>Shopping Cart</h4>
                                    <h4>{cart?.lineItems?.length} items</h4>
                                </div>

                                <hr />
                                {!cart?.lineItems?.length && (
                                    <div className="d-flex justify-content-center align-items-center mt-5" >
                                        <p className="text-white text-center">No item in cart!</p>
                                    </div>
                                )}

                                <div>
                                    {cart.lineItems?.map((item) => (
                                        <Fragment key={item._id}>
                                            <hr />
                                            <div className={styles.cart_item}>
                                                <div className={`row ${styles.item_info}`}>
                                                    <div className="col-4 col-lg-2">
                                                        <img
                                                            src={wixMedia.getScaledToFillImageUrl(item.image, 72, 96, {})}
                                                            alt={item.productName?.original}
                                                            height="80"
                                                            width="105"
                                                        />
                                                    </div>
                                                    <div className="col-5 col-lg-3">
                                                        <a href={`/product/${item._id}`}>
                                                            {item.productName?.original}
                                                        </a>
                                                    </div>
                                                    <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                                        <p id="card_item_price" className="mt-3">
                                                            PKR {item.price?.amount}
                                                        </p>
                                                    </div>
                                                    <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                                        <div className={styles.stockCounter}>
                                                            <button className="cursor-pointer" onClick={() => decreaseQty(item._id)}><AiOutlineMinus /></button>
                                                            <input
                                                                type="number"
                                                                value={item.quantity}
                                                                readOnly
                                                            />
                                                            <button onClick={() => increaseQty(item._id)}>
                                                                <AiOutlinePlus />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                                                        <button onClick={() => removeCartItem(item._id)} disabled={isLoading}>Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 ms-auto">
                            <div className={styles.order_summary}>
                                <h4>Order Summary</h4>
                                <hr />
                                <p>
                                    Subtotal:
                                    <span className="ms-3">
                                        {cart?.lineItems?.reduce(
                                            (acc, item) => acc + Number(item.quantity),
                                            0
                                        )}
                                        (Units)
                                    </span>
                                </p>
                                <p>
                                    Est. total:
                                    <span className="ms-3">
                                        PKR {calculateSubtotal()}
                                    </span>
                                </p>
                                <hr />
                                <div className="text-center">
                                    <button onClick={() => navigate('/checkout')} disabled={isLoading}>Check out</button>
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

export default Cart;
