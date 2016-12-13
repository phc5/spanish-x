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
					<span>Sign in with Google</span>
				</a>
			</section>
		</div>
	)
}

export default Home;