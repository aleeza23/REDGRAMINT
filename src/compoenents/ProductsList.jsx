import React, { useEffect, useState, useRef } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "../assets/styles/ProductsList.module.scss";
import { useWixContext } from "../context/wixContext";

const ProductsList = ({ categoryId, link, title }) => {
    const scrollRef = useRef(null);
    const { myWixClient, fetchCategoryProducts } = useWixContext();
    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
        fetchCategoryProducts(categoryId, setCategoryProducts);
    }, [categoryId]);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === "left") {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };

    return (
        <div className={styles.fashion}>
            <div className="container mt-5 mb-5">
                <div className="d-flex align-items-center justify-content-between">
                    <h4 className="ms-3">{title}</h4>
                    <span>
                        <Link to={`/products?id=${categoryId}`}>{link}</Link>
                    </span>
                </div>

                {/* product section */}
                <div className={styles.products_container}>
                    <div
                        className={styles.products_container_branch}
                        ref={scrollRef}
                    >
                        {categoryProducts && categoryProducts.map((product, index) => (
                            <div className={styles.item} key={index}>
                                <img
                                    src={product?.media?.mainMedia?.image?.url}
                                    alt={product?.name}
                                />
                                <p className="text-center mt-3">
                                    <Link to={`/products/${product._id}`}>
                                        {product?.name}
                                    </Link>
                                </p>
                                <p>PKR {product?.priceData.price}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.app__products_arrow}>
                        <BsArrowLeftShort onClick={() => scroll("left")} />
                        <BsArrowRightShort onClick={() => scroll("right")} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsList;
