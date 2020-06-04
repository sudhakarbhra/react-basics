import React from 'react';
import { NavLink} from 'react-router-dom';
import logo from '../assets/logo.png'

function NavBar() {
	return (
			<nav className="bd-navbar navbar has-shadow is-light" role="navigation" aria-label="main navigation">
		  		<div className="container">
			  		<div className="navbar-brand">
			  			<NavLink to="/" className="navbar-item is-light">
					      	<img src={ logo } alt="Super Hero API" />
					    </NavLink>
					    <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
					      <span aria-hidden="true"></span>
					      <span aria-hidden="true"></span>
					      <span aria-hidden="true"></span>
					    </div>
				    </div>
				  	<div id="navbarBasicExample" className="navbar-menu">
					    <div className="navbar-start">
					      <NavLink to="/" className="navbar-item">Home</NavLink>
					      <NavLink to="/about" className="navbar-item">About</NavLink>
					      <NavLink to="/contact" className="navbar-item">Contact</NavLink>
					    </div>
					</div>
			  	</div>
			</nav>
		);
}

export default NavBar;
