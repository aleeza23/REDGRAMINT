import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "../assets/styles/Products.module.scss";

const ProductCard = React.memo(({ product }) => {
    
    return (
        product && <Link to={`/products/${product?._id}`} className="col-6 col-md-4 text-decoration-none">
            <div className={styles.product}>
                <div>
                    <img
                        src={product.media?.mainMedia?.image?.url}
                        className="img-fluid"
                        alt={product?.name}
                    />
                </div>
                <Link to={`/products/${product?._id}`}>
                    <p className={styles.product_name}>{product?.name}</p>
                </Link>
                <div className="d-flex align-items-center justify-content-between mt-4">
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
});

export default ProductCard;
