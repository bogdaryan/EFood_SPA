import React from "react";

export default class Hero extends React.PureComponent {
	render() {
		return (
			<section className="hero" >
				<div className="container">
					<div className="hero__inner">
						<h1 className="hero__title" >
							Super Fast <span className="color-orange" >Food Delivery</span> Service
						</h1>
						<p className="hero__text" >We provide super fast-delivery service. Let’s use our services right now and get discounts of up to 50%</p>
						<p className="hero__text" >We provide super fast-delivery service. Let’s use our services right now and get discounts of up to 50%</p>
						<div className="box__info">
							<button className="box__info-btn bg-orange" >Explore Food</button>
							<a className="box__info-link" href="#">Download App</a>
						</div>
					</div>
				</div>
			</section>
		);
	}
}