import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import {  AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import styles from "../assets/styles/SingleProduct.module.scss";
import Navbar from "../compoenents/Header";
import Footer from "../compoenents/Footer";
// import { useAlert } from "react-alert";
import { useWixContext } from "../context/wixContext";

const SingleProduct = () => {
    const { productList, addToCart } = useWixContext()
    let { slug } = useParams();
    // const alert = useAlert();
    const [preview, setpreview] = useState(0)
    const product = productList?.find((product) => product._id === slug);
    

    const [quantity, setQuantity] = useState(1);


    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === "left") {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };

    const increaseQty = () => {
        if (quantity < product.stock?.quantity) setQuantity(quantity + 1);
    };

    const decreaseQty = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };


    // const addToCart = () => {
    //     alert.success("Item Added Into the Cart");
    // }
    return (
        product && <Fragment>
            <Navbar />
            <div className={styles.product_details}>
                <div className="container mb-5">
                    <div className="row g-3">
                        <div className="col-md-6">
                            {product?.media?.items && (
                                <>
                                    <div className="rounded" >
                                        <img src={product?.media?.items[preview].image?.url} className="img-fluid rounded" alt="item" />
                                    </div>
                                    {/* product section  */}
                                    <div className={styles.products_container}>
                                        <div className={styles.products_container_branch} ref={scrollRef}>
                                            {product?.media?.items?.map((image, index) => (
                                                <div key={image._id}>
                                                    <div className={styles.item}>
                                                        <img src={image?.image?.url} onClick={() => setpreview(index)} alt="img" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className={styles.app__gallery_images_arrows}>
                                            <BsArrowLeftShort className={styles.gallery__arrow_icon} onClick={() => scroll("left")} />
                                            <BsArrowRightShort className={styles.gallery__arrow_icon} onClick={() => scroll("right")} />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="col-md-6">
                            <div className={styles.Product_info}>
                                <h4>{product?.name}</h4>
                                <div className="d-flex align-items-center mt-3">
                                    <h4>PKR {product?.price?.price}/-</h4>

                                </div>
                                <p className="text-white">{product?.description}</p>
                                {/* stock counter  */}
                                <div className={styles.stock_counter}>
                                    <span className="minus" onClick={decreaseQty}>
                                        <AiOutlineMinus />
                                    </span>
                                    <input className="count" type="number" value={quantity} readOnly />
                                    <span className="plus" onClick={increaseQty}>
                                        <AiOutlinePlus />
                                    </span>
                                </div>
                                {/* stock status  */}
                                <p className="mt-3 text-white ">
                                    Status:
                                    <span id="stock_status" className={product?.stock?.quantity > 0 ? "greenColor ms-2" : "redColor ms-2"}>
                                        <b>{product?.stock?.quantity > 0 ? "In Stock" : "Out of Stock"}</b>
                                    </span>
                                </p>
                                {/* product seller  */}
                                <p id="product_seller mb-3 text-white">
                                    Sold by:
                                    <strong className="ms-2" style={{ color: '#f5a433' }}>{'seller'}</strong>
                                </p>
                                {/* buttons */}
                                <div className={styles.button}>
                                    <button disabled={product?.stock?.quantity <= 0} onClick={() => addToCart(product, quantity)}>Add To Cart</button>
                                    {/* <button>Buy Now</button> */}
                                </div>
                                <div className={styles.review}>
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

export default SingleProduct;
