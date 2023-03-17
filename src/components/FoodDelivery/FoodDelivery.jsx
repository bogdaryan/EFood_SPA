import React from "react";

import {
	desc_1,
	desc_2,
	desc_3,
} from "@/img_video";

export default function FoodDelivery() {
	return (
		<section className="delivery" >
			<div className="container">
				<div className="delivery__inner">
					<div className="delivery__info__box">
						<h2 className="delivery__title section-title" >
							<span className="color-orange " >Stay</span> at home, we will Provide <span className="color-orange" >good food</span>
						</h2>
						<p className="delivery__text" >We provide tasty food and superfast delivery at your home.  Let’s use our services right now and get discounts of up to 50%.</p>
						<ul className="delivery__desc">
							<li className="delivery__desc-item delivery__desc-item-1">
								<img className="delivery__desc-img" src={desc_1} alt="img" />
								<span className="delivery__desc-text" >Fasted Delivery in 30 Minutes</span>
							</li>
							<li className="delivery__desc-item">
								<img className="delivery__desc-img" src={desc_2} alt="img" />
								<span className="delivery__desc-text" >300+ delivery men</span>
							</li>
							<li className="delivery__desc-item">
								<img className="delivery__desc-img" src={desc_3} alt="img" />
								<span className="delivery__desc-text" >500+ restaurant & cafe shop</span>
							</li>
						</ul>
						<a className="delivery__btn bg-orange" href="#">See more</a>

					</div>
				</div>
			</div>
		</section>
	);
}