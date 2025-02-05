import React, { Fragment } from "react";
import Footer from "../compoenents/Footer";
import Navbar from "../compoenents/Header";
import styles from "../assets/styles/Success.module.scss";

const Success = () => {
    return (
        <Fragment>
            <Navbar />
            <div className={styles.success}>
                <div class="svg-container">
                    <svg
                        class="ft-green-tick"
                        xmlns="http://www.w3.org/2000/svg"
                        height="100"
                        width="100"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <circle
                            class={styles.circle}
                            fill="#5bb543"
                            cx="24"
                            cy="24"
                            r="22"
                        />
                        <path
                            class={styles.tick}
                            fill="none"
                            stroke="#FFF"
                            stroke-width="6"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            d="M14 27l5.917 4.917L34 17"
                        />
                    </svg>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default Success;
