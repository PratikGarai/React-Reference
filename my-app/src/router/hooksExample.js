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
				<Route path ="/listpage">
					<ListComponent /> 
				</Route>
			</Switch>
		</Router>
	);
}

export default ExampleApp;

function HomeComponent(props)
{
	console.log("useLocation");
	console.log(useLocation());
	console.log("useHistory");
	console.log(useHistory());
	console.log("useParams");
	console.log(useParams());
	return(
		<p> This is the {props.pageName} page. </p>
	);
}

function ListComponent(props)
{
	return(
		<div>
			<p> The list page </p>
			<Router>
				<Link to = "/listpage/1">Item 1</Link><br />
				<Link to = "/listpage/2">Item 2</Link><br />
				<Link to = "/listpage/3">Item 3</Link>
				<Switch>
					<Route path="/listpage/:someParam">
						<ListItem />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

function ListItem(props)
{
	let params = useParams();
	return(
		<h4>This is {params.someParam}th topic.</h4>
	);
}
