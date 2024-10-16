import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../assets/styles/Categories.module.scss";
import { useWixContext } from "../context/wixContext";



const Categories = () => {
    const { myWixClient, categories } = useWixContext();





    return (
        categories && <div className={styles.category}>
            <div className="container mb-5 mt-5">
                <div className="row gy-2 gx-4">
                    {categories?.map((item, index) => (
                        <Link to={`/products?id=${item._id}`} className="col-md-3 text-center" key={index}>
                            <div className={styles.item}>
                                <img src={item.media?.mainMedia?.image?.url} alt={item.name} />

                                <div>
                                    <h4>{item.name}</h4>
                                    {/* <p className="text-center">{item.link}</p> */}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Categories;
