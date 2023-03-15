import React from "react";

import {
	review_1,
} from "@/img_video";


export default class Reviews extends React.PureComponent {
	constructor(props) {
		super(props)


	}

	render() {
		return (
			<section className="reviews" >
				<div className="container">
					<h2 className="reviews__title section-title" >What Our Client Are <span className="color-orange" >Saying</span> </h2>
					<div className="reviews_slider">
						<div className="reviews__slider-line"  >
							<div className="reviews__slider-item reviews__slider-item--active " data-review='review-1'>
								<img src={review_1} alt="" />
								<div className="reviews__box">
									<p className="reviews__box-text" >EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery; </p>
									<p className="reviews__box-name" >Anglina Jole</p>
									<p className="reviews__box-subtitle" >Food lover</p>
								</div>
							</div>
							<div className=" reviews__slider-item " data-review='review-2'>
								<img src={review_1} alt="" />
								<div className="reviews__box">
									<p className="reviews__box-text" >EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery; </p>
									<p className="reviews__box-name" >Anglina Jole</p>
									<p className="reviews__box-subtitle" >Food lover</p>
								</div>
							</div>
							<div className=" reviews__slider-item " data-review='review-3'>
								<img src={review_1} alt="" />
								<div className="reviews__box">
									<p className="reviews__box-text" >EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery; </p>
									<p className="reviews__box-name" >Anglina Jole</p>
									<p className="reviews__box-subtitle" >Food lover</p>
								</div>
							</div>
						</div>
					</div>

					<button id="prev" className="slider-btn slider-btn-prev" value="-1">
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
							<path d="M27 16H5" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M14 7L5 16L14 25" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
					<button id="next" className="slider-btn slider-btn-next" value="1">
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5 16H27" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M18 7L27 16L18 25" stroke="#7B7B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
				</div>
			</section>
		);
	}
}