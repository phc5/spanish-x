import React, {Component} from 'react';

class AboutUs extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<a className="back-home" href="/"><p className="spx">Home</p></a>
				<h3>How Does this work?</h3>
				<p className="aboutp">Click on the, "Learn more stuff here" link and you get to study the word prior to taking the quiz on this app</p>
				<p className="aboutp">Once you are ready, sign into your Google account by clicking the button on the top right-hand corner</p>
				<p className="aboutp">When you are logged in, go ahead and take the quiz by typing your translation in the input.  The app will let you know if you are correct/incorrect and keep track of the score</p>
			</div>
		)
	}
}

export default AboutUs;