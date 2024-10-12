import React from 'react'
import Header from '../compoenents/Header'
import HeroSlider from '../compoenents/HeroSlider'
import Categories from '../compoenents/Categories'
import Footer from '../compoenents/Footer'
import ProductsList from '../compoenents/ProductsList'

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSlider />
            <Categories />
            <ProductsList categoryId={import.meta.env.VITE_FITNESS_WEAR_CATEGORY_ID} title="Fitness Wear" link='See all' />
            <ProductsList categoryId={import.meta.env.VITE_TEAM_WEAR_CATEGORY_ID } title="Team Wear" link='See all' />
            <ProductsList categoryId={import.meta.env.VITE_STREET_WEAR_CATEGORY_ID} title="Street Wear" link='See all' />
            <Footer />
        </div>
    )
}

export default Home