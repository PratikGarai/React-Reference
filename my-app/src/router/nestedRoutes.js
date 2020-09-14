import React from 'react';
import { BrowserRouter as Router,
	Switch, 
	Route,
	Link,
	useRouteMatch} from 'react-router-dom';

function ExampleApp(props)
{
	return(
		<div>
			<Router>
				<Link to = '/'>Home</Link><br />
				<Link to = '/about'>About</Link><br />
				<Link to = '/topics'>Topics</Link><br />
				<Switch>
					<Route path = "/about">
						<AboutApp />
					</Route>
					<Route path = "/topics">
						<TopicsApp />
					</Route>
					<Route path = "/">
						<PageApp />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default ExampleApp;

function PageApp(props)
{
	return(
		<h2> Welcome to the main Page ! </h2>
	);
}

function AboutApp(props)
{
	return(
		<h2> Welcome to the about Page ! </h2>
	);
}

function TopicsApp(props)
{
	let match = useRouteMatch();
	console.log(match);
	return(
		<div>
			<h2> Welcome to the topics Page ! </h2>
			<p> Here is a list of topics </p>
			<Router>
			</Router>
		</div>
	);
}
