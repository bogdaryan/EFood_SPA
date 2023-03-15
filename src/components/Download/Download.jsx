import React from "react";
import {
	ios_download,
	android_download,
} from "@/img_video";


export default class Download extends React.PureComponent {
	render() {
		return (
			<section className="download" >
				<div className="container">
					<div className="download__inner">
						<div className="download__info">
							<h2 className="download__title section-title" >Download  Our <span className="color-orange" >Mobile App</span></h2>
							<p className="download__text" >
								It's all at your fingertips -- the restaurants you love. Find the right food to suit your mood, and make the first bite last. Go ahead, download app and get 50% discount
							</p>
							<a className="download__link" href="#">
								<img src={ios_download} alt="" />
							</a>
							<a className="download__link" href="#">
								<img className="download__img" src={android_download} alt="" />
							</a>
						</div>
					</div>
				</div>
			</section>
		);
	}
}