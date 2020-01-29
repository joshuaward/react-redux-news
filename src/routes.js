import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import Article from './components/article';

const Routes = () => (
	<BrowserRouter>
		<Header />
		<Switch>
			<Route path="/article/:id" component={Article} />
			<Route path="/" component={Home} />
		</Switch>
		<Footer />
	</BrowserRouter>
)

export default Routes;