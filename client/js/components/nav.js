import React, {Component} from 'react';

class Nav extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="button">
				<p className="spx">Spanish X</p>
				<a className="logout" href="/logout">
					<img src="/assets/logout.png" className="logoutImg"/>
				</a>
			</div>
		)
	}
}

export default Nav;