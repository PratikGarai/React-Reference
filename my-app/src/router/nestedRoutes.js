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
	return(
		<div>
			<h2> Welcome to the topics Page ! </h2>
			<p> Here is a list of topics </p>
			<Router>
				<Link to = {match.url+"/link1"}>Link 1</Link><br />
				<Link to = {match.url+"/link2"}>Link 2</Link><br />
				<Link to = {match.url+"/link3"}>Link 3</Link><br />
				<Switch>
					<Route path={match.url+"/link1"}>
						<TemplateTopic number="1" />
					</Route>
					<Route path={match.url+"/link2"}>
						<TemplateTopic number="2" />
					</Route>
					<Route path={match.url+"/link3"}>
						<TemplateTopic number="3" />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

function TemplateTopic(props)
{
	return(
	<h3> This is topic number {props.number}!</h3> 
	);
}
