import React from 'react';
import { BrowserRouter as Router, 
	Switch , 
	Route ,
	Link } from 'react-router-dom';

function ExampleApp(props)
{
	return(
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
			</Switch>
		</Router>
	);
}

export default ExampleApp;

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
