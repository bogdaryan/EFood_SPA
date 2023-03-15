import React from "react";
import { plane } from "@/img_video";


export default class Subscribe extends React.PureComponent {
	render() {
		return (
			<section className="subscribe" >
				<div className="container">
					<h2 className="subscribe__title section-title" >Subscribe to get the Latest Offer</h2>
					<p className="subscribe__text" >Get our daily updates by subscribing to our newspaper, please drop your email below</p>
					<form className="subscribe__form">
						<label>
							<input className="subscribe__form-input" type="text" placeholder="Enter your email addres" />
							<button className="subscribe__form-btn bg-orange" >
								<img src={plane} alt="" />
								<span>Subscribe</span>
							</button>
						</label>
					</form>
				</div>
			</section>
		);
	}
}