import React from "react"
import './Header.css'

function Header()
{
	return (
      		<header className="header-full">
	  		<h2>Header Heading</h2>
			<nav className="header-nav">
				<ul className = "header-nav__list">
					<li><a href="#">Link 1</a></li>
					<li><a href="#">Link 2</a></li>
					<li><a href="#">Link 3</a></li>
				</ul>
			</nav>
		<br />
		<hr />
      		</header>
	);
}

export default Header;
