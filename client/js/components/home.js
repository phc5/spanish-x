import React from 'react';


function Home() {
	return (

		<div>
			<section className="header">
				<div className="welcome">
					<h3>welcome to</h3>
					<div className="typewriter">
						<h1>Spanish X</h1>
					</div>
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