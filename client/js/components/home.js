import React from 'react';


function Home() {
	return (
		<div>
			<section className="header">
				<div>
					<h1>Spanish X</h1>
				</div>
			</section>
			<section className="log-in">
				<a href="/auth/google">
					<img src="/assets/btn_google_signin_light_pressed_web.png" />
				</a>
			</section>
		</div>
	)
}

export default Home;