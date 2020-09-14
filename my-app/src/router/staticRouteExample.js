import React from 'react';
import { BrowserRouter as Router, 
	Switch , 
	Route ,
	Link } from 'react-router-dom';

function ExampleApp(props)
{
	return(
		<div>
			<Router>
				<Link to ='/page1'>Page1</Link><br />
				<Link to ='/page2'>Page2</Link>
				<Switch>
					<Route path='/page1'>
						<PageApp1 />
					</Route>
					<Route path='/page2'>
						<PageApp2 />
					</Route>
					<Route path='/'>
						<PageApp0 />
					</Route>
				</Switch>
			</Router>
			<p>
				This is part of main app.
			</p>
		</div>
	);
}

export default ExampleApp;

function PageApp0(props)
{
	return(
		<h2> This is part of  main page using Route </h2>
	);
}
function PageApp1( props )
{
	return(
		<h2> This is Page1 </h2>
	);
}
function PageApp2( props )
{
	return(
		<h2> This is Page2 </h2>
	);
}
