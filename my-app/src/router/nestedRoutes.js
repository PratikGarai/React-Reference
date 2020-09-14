import React from 'react';
import { BrowserRouter as Router,
	Switch, 
	Route,
	Link,
	useRouteMatch,
	NavLink,
	Redirect,
	useHistory} from 'react-router-dom';

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
	let history = useHistory();
	return(
		<div>
			<h2> Welcome to the topics Page ! </h2>
			<p> Here is a list of topics </p>
			<Router>
				<NavLink to = {match.url+"/link1"}>Link 1</NavLink><br />
				<NavLink to = {match.url+"/link2"}>Link 2</NavLink><br />
				<NavLink to = {match.url+"/link3"}>Link 3</NavLink><br />
				<NavLink to = {match.url+"/link4"}>Redirect Home</NavLink><br />
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
					<Route path={match.url+"/link4"}>
						<Redirector history = {history} />
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

function Redirector(props)
{
	props.history.push('/');
	return(
		<h1>Redirecting...</h1>
	);
}
