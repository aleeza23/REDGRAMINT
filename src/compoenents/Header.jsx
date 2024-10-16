import React, { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineLogout, AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import Announcement from "./Banner";
import Search from "./Search";
import "../assets/styles/Header.scss";
import Navs from "./Navs";
import logo from '../assets/images/NEW.svg'
import { useWixContext } from "../context/wixContext";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const { cart } = useWixContext()
    const isAdmin = false

    // Sticky Menu Area
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".links");
            const scrollTop = window.scrollY;
            scrollTop >= 150
                ? header.classList.add("is-sticky")
                : header.classList.remove("is-sticky");
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="nav_container">
            <Announcement />
            <nav className="navbar">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <img
                            style={{ height: "60px", width: '150px' }}
                            src={logo}
                            alt=""
                        />
                       
                    </div>
                    <ul className="block mt-3 ms-auto d-md-none text-decoration-none ">
                        <li className="cart me-4 " style={{ position: 'relative', listStyle : 'none' }}>
                                <Link to="/cart">
                                    <AiOutlineShoppingCart className="icon text-white " size={25} />
                                </Link>
                                {cart.lineItems?.length > 0 && <p
                                    style={{
                                        position: 'absolute',
                                        top: '-10px',
                                        right: '-10px',
                                        background: 'red',
                                        color: 'white',
                                        borderRadius: '50%',
                                        padding: '2px 8px',
                                        fontSize: '12px',
                                    }}
                                >
                                    {cart.lineItems?.length}
                                </p>}
                            </li>
                            
                        </ul>

                    <div className="search">
                        <Search />
                    </div>
                    <div className="nav_links">
                        <ul className="d-flex align-items-center">
                            <li className="cart">
                                <Link to="/cart">
                                    <AiOutlineHeart className="icon" size={25} />
                                </Link>
                            </li>
                            <li className="cart" style={{ position: 'relative' }}>
                                <Link to="/cart">
                                    <AiOutlineShoppingCart className="icon" size={25} />
                                </Link>
                                {cart.lineItems?.length > 0 && <p
                                    style={{
                                        position: 'absolute',
                                        top: '-10px',
                                        right: '-10px',
                                        background: 'red',
                                        color: 'white',
                                        borderRadius: '50%',
                                        padding: '2px 8px',
                                        fontSize: '12px',
                                    }}
                                >
                                    {cart.lineItems?.length}
                                </p>}
                            </li>


                            {isAdmin === true && <>
                                <li className="profile">
                                    <Link to="/profile">
                                        <AiOutlineUser className="icon" size={25} />
                                    </Link>
                                </li>
                                <li className="logout">
                                    <Link to="/logout">
                                        <AiOutlineLogout className="icon" size={25} />
                                    </Link>
                                </li>
                            </>}
                        </ul>
                    </div>
                    
                    <div className="app__navbar-menu">
                                              
                        <HiMenuAlt3 onClick={() => setToggle(true)} />

                        {toggle && (
                            <motion.div
                                whileInView={{ x: [300, 0] }}
                                transition={{ duration: 0.85, ease: "easeOut" }}
                            >
                                <HiX onClick={() => setToggle(false)} />
                                <ul>
                                    <li>
                                        <Link to="/" onClick={() => setToggle(false)}>Home</Link>
                                    </li>
                                    <hr className="text-black" />
                                    <li>
                                        <Link to="/products" onClick={() => setToggle(false)}>Products</Link>
                                    </li>
                                    <hr />
                                    <li>
                                        <Link to="/contact" onClick={() => setToggle(false)}>Contact</Link>
                                    </li>
                                    <hr />
                                    <li>
                                        <Link to="/about" onClick={() => setToggle(false)}>About</Link>
                                    </li>
                                </ul>
                            </motion.div>
                        )}
                    </div>
                </div>
            </nav>
            {/* navs */}
            <div className="links">
                <Navs />
            </div>
        </div>
    );
};

export default Header;
