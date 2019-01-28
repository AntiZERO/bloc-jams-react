import React from 'react';

const Landing = () => (
	<section className="landing">
		<h2 className="hero-title">Turn the music up!</h2>
		
		<section className="selling-points">
			<div className="point">
				<h2 className="point-title">Choose your music</h2>
				<img className="point-image"  src="assets/images/point1img.jpg" id="PtImg1" alt="red-record"></img>
				<p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
			</div>
			<div className="point">
				<h2 className="point-title">Unlimited, streaming, ad-free</h2>
				<img className="point-image" src="assets/images/darkred.jpg" id="PtImg2" alt="guy in a red hoodie"></img>
				<p className="point-description">No arbitrary limits. No distractions</p>
			</div>
			<div className="point">
				<h2 className="point-title">Mobile enabled</h2>
				<img className="point-image" src="assets/images/digitalred.jpg" id="PtImg3" alt="digital red"></img>
				<p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
			</div>
		</section>
	</section>
	);

	export default Landing;