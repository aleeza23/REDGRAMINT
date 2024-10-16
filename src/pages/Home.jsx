import React, { Suspense, lazy } from 'react';
import Header from '../compoenents/Header';
import HeroSlider from '../compoenents/HeroSlider';
import Footer from '../compoenents/Footer';

// Dynamically import ProductsList and Categories
const ProductsList = lazy(() => import('../compoenents/ProductsList'));
const Categories = lazy(() => import('../compoenents/Categories'));

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSlider />
            <Suspense fallback={''}>
                <Categories />
            </Suspense>
            <Suspense fallback={''}>
                <ProductsList categoryId={import.meta.env.VITE_JACKET_WEAR_CATEGORY_ID} title="Leather Jackets" link='See all' />
                <ProductsList categoryId={import.meta.env.VITE_TEAM_WEAR_CATEGORY_ID} title="Team Wear" link='See all' />
                <ProductsList categoryId={import.meta.env.VITE_STREET_WEAR_CATEGORY_ID} title="Street Wear" link='See all' />
            </Suspense>
            <Footer />
        </div>
    );
}

export default Home;
