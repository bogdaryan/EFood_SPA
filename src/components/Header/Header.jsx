import React from "react";
import { search, basket } from "@/img_video";
import { useGetPokemonByNameQuery } from '../../service/pokemon.js'



export default function Header() {
	const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

	console.log(data)

	return (
		<header className="header" >
			<div className="container">
				<div className="header__inner">
					<a className="logo" href="#">
						<span className="color-orange" >E</span>
						<span>Food</span>
					</a>
					<nav className="menu" >
						<ul>
							<li className="menu__list" >
								<a className="menu__link" href="#">Home</a>
							</li>
							<li className="menu__list" >
								<a className="menu__link" href="#">Service</a>
							</li>
							<li className="menu__list" >
								<a className="menu__link" href="#">Top cities</a>
							</li>
							<li className="menu__list" >
								<a className="menu__link" href="#">Contract</a>
							</li>
						</ul>
					</nav>
					<form id='search' className="form" >
						<img className="form__img" src={search} alt="search" />
						<input className="form__input " type="search" />
						<ul className="search__result " >

							<li className="search__result-item" >
								<img src={basket} alt="" />
								<span>Some result 1</span>
								<span>15$</span>
								<button className="bg-orange" >order</button>
							</li>

						</ul>
					</form>

					<div className="basket__inner">
						<a className="basket" href="#">
							<img src={basket} alt="basket" />
							<span>4</span>
						</a>
						<ul className="basket__list " >
							<li className='basket__item' >
								<img className="basket__item-img" src={basket} alt="basket" />
								<span className="basket__item-item">Pizza</span>
								<span className="basket__item-price" >100$ </span>
							</li>
							<li className='basket__item' >
								<img className="basket__item-img" src={basket} alt="basket" />
								<span className="basket__item-item">Pizza</span>
								<span className="basket__item-price" >100$ </span>
							</li>
							<li className='basket__item' >
								<img className="basket__item-img" src={basket} alt="basket" />
								<span className="basket__item-item">Pizza</span>
								<span className="basket__item-price" >100$ </span>
							</li>
							<li className="basket__item-btn " >
								<button className="bg-orange" >Order</button>
							</li>
						</ul>
					</div>




					<a className="sign-up bg-orange" href="">Sign Up</a>
				</div>
			</div>
		</header>
	);
}