import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay, EffectCreative } from 'swiper/modules';
import styles from "../assets/styles/HeroSlider.module.scss";
import slideONE from '../assets/images/1_banner.jpg';
import slideTWO from '../assets/images/2_banner.jpg';
import slideTHREE from '../assets/images/3_banner.jpg';
import slideFOUR from '../assets/images/4_banner.jpg';
import slideFIVE from '../assets/images/5_banner.jpg';
import slideSIX from '../assets/images/6_banner.jpg';


const HeroSlider = () => {
    return (
        <div className={styles.banner}>
            <Swiper
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay, Navigation, EffectCreative]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={styles.swiper1}>
                        <img
                            src={slideONE}
                            alt="Spring Summer Collection 1"
                            className={styles.slideImage} // Add class for styling
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.swiper2}>
                        <img
                            src={slideTWO}
                            alt="Spring Summer Collection 2"
                            className={styles.slideImage} // Add class for styling
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.swiper2}>
                        <img
                            src={slideTHREE}
                            alt="Spring Summer Collection 2"
                            className={styles.slideImage} // Add class for styling
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.swiper2}>
                        <img
                            src={slideFOUR}
                            alt="Spring Summer Collection 2"
                            className={styles.slideImage} // Add class for styling
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.swiper2}>
                        <img
                            src={slideFIVE}
                            alt="Spring Summer Collection 2"
                            className={styles.slideImage} // Add class for styling
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.swiper2}>
                        <img
                            src={slideSIX}
                            alt="Spring Summer Collection 2"
                            className={styles.slideImage} // Add class for styling
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroSlider;
