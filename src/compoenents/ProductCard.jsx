import React from "react";
import { AiFillStar, AiOutlineEye } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "../assets/styles/Products.module.scss";

const ProductCard = ({ product }) => {
    return (
        <Link to={`/products/${product?._id}`} className="col-md-4 text-decoration-none">
            <div className={styles.product}>
                <div className={styles.product_image}>
                    <img src={product.media?.mainMedia?.image?.url } alt={product?.name} />
                </div>
                <Link to={`/products/${product?._id}`}>
                    <p className={styles.product_name}>{product?.name}</p>
                </Link>
                <div className="d-flex align-items-center justify-content-between mt-4">
                    {/* <div className={styles.product_rating}>
                        <AiFillStar size={20} color={"gold"} />
                        <span className="ms-2">{product?.numOfReviews}</span>
                    </div> */}
                    <div>
                        <span className="fw-bold">PKR {product.priceData.price}</span>
                    </div>
                </div>
                <div className={styles.link_container}>
                    <button>
                        <MdOutlineFavoriteBorder className={styles.icon} size={25} />
                    </button>
                    <Link to={`/products/${product?._id}`}>
                        <AiOutlineEye size={25} />
                    </Link>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
