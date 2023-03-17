import React from "react";

import {
	phone,
	email,
	facebook,
	twitter,
	instagram,
	pinterest,
} from "@/img_video";

export default function Footer() {
	return (
		<footer className="footer" >
			<div className="container">
				<div className="footer__inner">
					<div className="footer__info">
						<a className="logo" href="#">
							<span className="color-orange" >E</span>
							<span>Food</span>
						</a>
						<address className="footer__address" >Dhaka, Bangladesh</address>
						<a className="footer__number" href="tel:+0943833399">
							<img src={phone} alt="" />
							<span>0943833399</span>
						</a>
						<a className="footer__email" href="mailto:support@efood.com">
							<img src={email} alt="" />
							<span>support@efood.com</span>
						</a>
						<ul className="social__links">
							<li className="social__links-item">
								<img src={facebook} alt="" />
							</li>
							<li className="social__links-item">
								<img src={twitter} alt="" />
							</li>
							<li className="social__links-item">
								<img src={instagram} alt="" />
							</li>
							<li className="social__links-item">
								<img src={pinterest} alt="" />
							</li>
						</ul>
					</div>
					<div className="footer__links">
						<ul className="footer__links-list service">
							<li>Service</li>
							<li><a href="#">How it works</a></li>
							<li><a href="#">Home delivery</a></li>
							<li><a href="#">Products</a></li>
							<li><a href="#">Menu</a></li>
						</ul>
						<ul className="footer__links-list company">
							<li>Company</li>
							<li><a href="#">About Us</a></li>
							<li><a href="#">News</a></li>
							<li><a href="#">Our trusted partner</a></li>
							<li><a href="#">New users FAQ</a></li>
						</ul>
						<ul className="footer__links-list supports">
							<li>Supports</li>
							<li><a href="#">Help center</a></li>
							<li><a href="#">Feedbcak</a></li>
							<li><a href="#">Contact us</a></li>
							<li><a href="#">Terms conditins</a></li>
						</ul>
						<ul className="footer__links-list resources">
							<li>Resources</li>
							<li><a href="#">Download app</a></li>
							<li><a href="#">Blog</a></li>
							<li><a href="#">What’s new</a></li>
							<li><a href="#">Sitemap</a></li>
						</ul>
					</div>
				</div>
				<div className="footer__bottom">
					<p>© 2023 EFood - All rights reserved.</p>
					<ul className="footer__bottom-list" >
						<li className="footer__bottom-item" ><a href="#">Privacy</a></li>
						<li className="footer__bottom-item" ><a href="#">Security</a></li>
						<li className="footer__bottom-item" ><a href="#">Terms</a></li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
