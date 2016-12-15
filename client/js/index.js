import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {Router, Route, hashHistory, Link} from 'react-router';
import Home from './components/home';
import Questions from './components/questions';
import AboutUs from './components/about-us';



console.log(`Client running in ${process.env.NODE_ENV} mode`);

const routes = (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Home} />
			<Route path="/questions" component={Questions} />
			<Route path="/about" component={AboutUs} />
		</Router>
	</Provider>
)

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(routes, document.getElementById('app'));
});