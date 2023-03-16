import React from 'react';
import classnames from 'classnames'
import { search, basket } from '@/img_video';
// import { useGetPokemonByNameQuery } from '../../service/pokemon.js'
// const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
// console.log(data)


export default class Header extends React.PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			isBasketListShown: false
		}
	}

	componentDidMount() {
		const quantity = this.basket__list.childElementCount - 1

		this.setState({
			BasketQuantityProduct: quantity == -1 ? 0 : quantity
		})

		this.basketBtn.addEventListener('click', () => {

			this.setState(prevState => ({
				isBasketListShown: !prevState.isBasketListShown
			})); // работает на так как ожидалось

		})
	}

	render() {
		return (
			<header className='header' >
				<div className='container'>
					<div className='header__inner'>
						<a className='logo' href='#'>
							<span className='color-orange' >E</span>
							<span>Food</span>
						</a>
						<nav className='menu' >
							<ul>
								<li className='menu__list' >
									<a className='menu__link menu__link--active' href='/home'>Home</a>
								</li>
								<li className='menu__list' >
									<a className='menu__link' href='/service'>Service</a>
								</li>
								<li className='menu__list' >
									<a className='menu__link' href='/top_cities'>Top cities</a>
								</li>
								<li className='menu__list' >
									<a className='menu__link' href='/contract'>Contract</a>
								</li>
							</ul>
						</nav>
						<form id='search' className='form' >
							<img className='form__img' src={search} alt='search' />
							<input className='form__input ' type='search' />
							<ul className='search__result ' >
								<li className='search__result-item' >
									<img src={basket} alt='' />
									<span>Some result 1</span>
									<span>15$</span>
									<button className='bg-orange' >order</button>
								</li>

								<li className='search__result-item' >
									<img src={basket} alt='' />
									<span>Some result 1</span>
									<span>15$</span>
									<button className='bg-orange' >order</button>
								</li>

								<li className='search__result-item' >
									<img src={basket} alt='' />
									<span>Some result 1</span>
									<span>15$</span>
									<button className='bg-orange' >order</button>
								</li>
							</ul>
						</form>

						<div className='basket__inner'>
							<a
								className={classnames('basket', { 'basket--on': this.state.BasketQuantityProduct })}
								href='#'
								ref={el => this.basketBtn = el} >
								<img src={basket} alt='basket' />
								<span>{this.state.BasketQuantityProduct}</span>
							</a>

							<ul
								className={classnames('basket__list', { 'basket__list--active': this.state.isBasketListShown })}
								ref={el => this.basket__list = el} >
								<li className='basket__item' >
									<img className='basket__item-img' src={basket} alt='basket' />
									<span className='basket__item-item'>Pizza</span>
									<span className='basket__item-price' >100$ </span>
								</li>
								<li className='basket__item' >
									<img className='basket__item-img' src={basket} alt='basket' />
									<span className='basket__item-item'>Pizza</span>
									<span className='basket__item-price' >100$ </span>
								</li>
								<li className='basket__item' >
									<img className='basket__item-img' src={basket} alt='basket' />
									<span className='basket__item-item'>Pizza</span>
									<span className='basket__item-price' >100$ </span>
								</li>
								<li className='basket__item-btn ' >
									<button className='bg-orange' >Order</button>
								</li>
							</ul>

						</div>
						<a className='sign-up bg-orange' href=''>Sign Up</a>
					</div>
				</div>
			</header>
		);
	}
}