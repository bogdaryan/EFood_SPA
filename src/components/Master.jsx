import React from "react";
import '@styles/index.scss'
import Header from "@/components/Header/Header.jsx";
import Hero from "@/components/Hero/Hero.jsx";
import Category from "@/components/Category/Category.jsx";
import FoodDelivery from "@/components/FoodDelivery/FoodDelivery.jsx";
import Restaurants from "@/components/Restaurants/Restaurants.jsx";
import Download from "@/components/Download/Download.jsx";
import Reviews from "@/components/Reviews/Reviews.jsx";
import Subscribe from "@/components/Subscribe/Subscribe.jsx";
import Footer from "@/components/Footer/Footer.jsx";

export default function Master() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Category />
				<FoodDelivery />
				<Restaurants />
				<Download />
				<Reviews />
				<Subscribe />
				<Footer />
			</main>
		</>
	);
}

