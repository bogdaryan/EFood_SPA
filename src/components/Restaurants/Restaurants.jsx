import React from "react";

import {
	arrow_small_right,
	timer,
	restaurant_1,
	restaurant_2,
	restaurant_3,
	restaurant_4,
	restaurant_5,
	restaurant_6,
} from "@/img_video";


export default function Restaurants() {
	return (
		<section className="restaurants" >
			<div className="container">
				<h2 className="restaurants__title section-title" >Top Food <span className="color-orange" >Restaurant</span></h2>
				<ul className="restaurants__inner">
					<li className="restaurant">
						<img className="restaurant__img" src={restaurant_1} alt="" />
						<p className="restaurant__title" >Blaze Pizza</p>
						<p className="restaurant__time" >
							<img src={timer} alt="" />
							<time dateTime='11:00' >11.00 AM</time> - <time dateTime='22:00'>10.00  PM</time>
						</p>
						<button className="restaurant__btn bg-orange " >
							<img src={arrow_small_right} alt="->" />
						</button>
					</li>
					<li className="restaurant">
						<img className="restaurant__img" src={restaurant_2} alt="" />
						<p className="restaurant__title" >Blaze Pizza</p>
						<p className="restaurant__time" >
							<img src={timer} alt="" />
							<time dateTime='09:00' >09.00 AM</time> - <time dateTime='22:00'>10.00  PM</time>
						</p>
						<button className="restaurant__btn bg-orange " >
							<img src={arrow_small_right} alt="->" />
						</button>
					</li>
					<li className="restaurant">
						<img className="restaurant__img" src={restaurant_3} alt="" />
						<p className="restaurant__title" >Blaze Pizza</p>
						<p className="restaurant__time" >
							<img src={timer} alt="" />
							<time dateTime='10:00' >10.00 AM</time> - <time dateTime='00:00'>12.00  PM</time>
						</p>
						<button className="restaurant__btn bg-orange " >
							<img src={arrow_small_right} alt="->" />
						</button>
					</li>
					<li className="restaurant">
						<img className="restaurant__img" src={restaurant_4} alt="" />
						<p className="restaurant__title" >Blaze Pizza</p>
						<p className="restaurant__time" >
							<img src={timer} alt="" />
							<time dateTime='11:00' >11.00 AM</time> - <time dateTime='22:00'>10.00  PM</time>
						</p>
						<button className="restaurant__btn bg-orange " >
							<img src={arrow_small_right} alt="->" />
						</button>
					</li>
					<li className="restaurant">
						<img className="restaurant__img" src={restaurant_5} alt="" />
						<p className="restaurant__title" >Blaze Pizza</p>
						<p className="restaurant__time" >
							<img src={timer} alt="" />
							<time dateTime='10:00' >09.00 AM</time> - <time dateTime='22:00'>10.00  PM</time>
						</p>
						<button className="restaurant__btn bg-orange " >
							<img src={arrow_small_right} alt="->" />
						</button>
					</li>
					<li className="restaurant">
						<img className="restaurant__img" src={restaurant_6} alt="" />
						<p className="restaurant__title" >Blaze Pizza</p>
						<p className="restaurant__time" >
							<img src={timer} alt="" />
							<time dateTime='10:00' >10.00 AM</time> - <time dateTime='00:00'>12.00  PM</time>
						</p>
						<button className="restaurant__btn bg-orange " >
							<img src={arrow_small_right} alt="->" />
						</button>
					</li>
				</ul>
			</div>
		</section>
	);
}