import React from "react";
import {
	pizza,
	sandwich,
	asian,
	setmenu,
	burger_tab,
	rating_stars,
	burger_1,
	burger_2,
	burger_3,
	burger_4,
	burger_5,
} from "@/img_video";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from "swiper";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



export default class Header extends React.PureComponent {
	render() {
		return (
			<section className="category" >
				<div className="container">
					<h2 className="category__title section-title" >Our popular <span className="color-orange" >Category</span> </h2>

					<div className="tabs" >
						<ul className="tabs__btn">
							<li className="tabs__btn-item" data-category="burger">
								<img src={burger_tab} alt="" />
								<span>Burger</span>
							</li>
							<li className="tabs__btn-item" data-category="sandwich" >
								<img src={pizza} alt="" />
								<span>Pizza</span>

							</li>
							<li className="tabs__btn-item" data-category="asian">
								<img src={sandwich} alt="" />
								<span>Sandwich</span>

							</li>
							<li className="tabs__btn-item" data-category="pizza">
								<img src={asian} alt="" />
								<span>Asian Food</span>

							</li>
							<li className="tabs__btn-item" data-category="set_menu">
								<img src={setmenu} alt="" />
								<span>Set Menu</span>
							</li>
						</ul>

						<Swiper
							slidesPerView={5}
							spaceBetween={25}
							pagination={{
								clickable: true,
							}}
							navigation={true}
							modules={[Pagination, Navigation]}
							className='tabs__content'
						>
							<SwiperSlide>
								<div className="tabs__content-item">
									<img className="tabs__content-img" src={burger_1} alt="img" />
									<img className="tabs__content-rating" src={rating_stars} alt="rating_stars" />
									<p className="tabs__content-title" >Cheeseburger With Salad</p>
									<p className="tabs__content-price" >$18.00</p>
									<button className="tabs__content-btn bg-orange" >Add to Cart</button>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="tabs__content-item">
									<img className="tabs__content-img" src={burger_2} alt="img" />
									<img className="tabs__content-rating" src={rating_stars} alt="rating_stars" />
									<p className="tabs__content-title" >Beef Burger</p>
									<p className="tabs__content-price" >$18.00</p>
									<button className="tabs__content-btn bg-orange" >Add to Cart</button>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="tabs__content-item">
									<img className="tabs__content-img" src={burger_3} alt="img" />
									<img className="tabs__content-rating" src={rating_stars} alt="rating_stars" />
									<p className="tabs__content-title" >Royel Cheeseburger</p>
									<p className="tabs__content-price" >$18.00</p>
									<button className="tabs__content-btn bg-orange" >Add to Cart</button>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="tabs__content-item">
									<img className="tabs__content-img" src={burger_4} alt="img" />
									<img className="tabs__content-rating" src={rating_stars} alt="rating_stars" />
									<p className="tabs__content-title" >Black Gambugrer </p>
									<p className="tabs__content-price" >$18.00</p>
									<button className="tabs__content-btn bg-orange" >Add to Cart</button>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="tabs__content-item">
									<img className="tabs__content-img" src={burger_5} alt="img" />
									<img className="tabs__content-rating" src={rating_stars} alt="rating_stars" />
									<p className="tabs__content-title" >Cheeseburger With Salad</p>
									<p className="tabs__content-price" >$18.00</p>
									<button className="tabs__content-btn bg-orange" >Add to Cart</button>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="tabs__content-item">
									<img className="tabs__content-img" src={burger_1} alt="img" />
									<img className="tabs__content-rating" src={rating_stars} alt="rating_stars" />
									<p className="tabs__content-title" >Cheeseburger With Salad</p>
									<p className="tabs__content-price" >$18.00</p>
									<button className="tabs__content-btn bg-orange" >Add to Cart</button>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="tabs__content-item">
									<img className="tabs__content-img" src={burger_2} alt="img" />
									<img className="tabs__content-rating" src={rating_stars} alt="rating_stars" />
									<p className="tabs__content-title" >Cheeseburger With Salad</p>
									<p className="tabs__content-price" >$18.00</p>
									<button className="tabs__content-btn bg-orange" >Add to Cart</button>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="tabs__content-item">
									<img className="tabs__content-img" src={burger_3} alt="img" />
									<img className="tabs__content-rating" src={rating_stars} alt="rating_stars" />
									<p className="tabs__content-title" >Cheeseburger With Salad</p>
									<p className="tabs__content-price" >$18.00</p>
									<button className="tabs__content-btn bg-orange" >Add to Cart</button>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="tabs__content-item">
									<img className="tabs__content-img" src={burger_4} alt="img" />
									<img className="tabs__content-rating" src={rating_stars} alt="rating_stars" />
									<p className="tabs__content-title" >Cheeseburger With Salad</p>
									<p className="tabs__content-price" >$18.00</p>
									<button className="tabs__content-btn bg-orange" >Add to Cart</button>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="tabs__content-item">
									<img className="tabs__content-img" src={burger_5} alt="img" />
									<img className="tabs__content-rating" src={rating_stars} alt="rating_stars" />
									<p className="tabs__content-title" >Cheeseburger With Salad</p>
									<p className="tabs__content-price" >$18.00</p>
									<button className="tabs__content-btn bg-orange" >Add to Cart</button>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</section>
		);
	}
}