import React, {Component} from 'react';

class AboutUs extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<a className="back-home" href="/"><p className="home">Home</p></a>
				<h3>How Does this work?</h3>
				<p className="aboutp">If you want to learn computer programming terminologies in Spanish, you are in the right spot.</p>
				<p className="aboutp">Click <a href="http://spanish.about.com/od/wordlists/a/computers.htm">here</a> to study the words prior to taking the quiz on this app.  There are couple extra ones that are not on this site, but big kudos to you if you get it. :)</p>
				<p className="aboutp">Once you are ready, sign into your Google account by clicking the button on the top right-hand corner.</p>
				<p className="aboutp">When you are logged in, go ahead and take the quiz by typing your translation in the input.  The app will let you know if you are correct/incorrect and keep track of the score.</p>
			</div>
		)
	}
}

export default AboutUs;