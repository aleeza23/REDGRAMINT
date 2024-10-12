import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/styles/Navs.module.scss";

const Navs = () => {
    return (
        <div className={styles.links}>
            <Link to="/">Home </Link>
            <Link to="/products">Products </Link>
            <Link to="/about">About </Link>
            <Link to="/contact">Contact </Link>
        </div>
    );
};

export default Navs;
