import React from 'react';
import { BrowserRouter as Router, 
	Link,
	Route, 
	Switch,
	useLocation, useHistory, useParams, useRouteMatch } from 'react-router-dom';

function ExampleApp(props)
{
	return(
		<Router>
			<Link to = "/">Home</Link><br />
			<Link to = "/somepage">Some Page</Link><br />
			<Link to = "/about">About Page</Link><br />
			<Link to = "/listpage">List Page</Link><br />
			<Switch>
				<Route exact path ="/">
					<HomeComponent pageName="Home"/>
				</Route>
				<Route path ="/somepage">
					<HomeComponent pageName="random"/>
				</Route>
				<Route path ="/about">
					<HomeComponent pageName="About"/>
				</Route>
				<Route path ="">
					<ListComponent /> 
				</Route>
			</Switch>
		</Router>
	);
}

export default ExampleApp;

function HomeComponent(props)
{
	return(
		<p> This is the {props.pageName} page. </p>
	);
}

function ListComponent(props)
{
	return(
		<p> The list page </p>
	);
}
