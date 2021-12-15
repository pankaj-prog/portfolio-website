import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css'


function Nav() {
	function myfunc(e){
		console.log(e.target)
	}
	return (
		<nav className='nav-container'>
			<h1 className="nav-name">
				<span id="first-name">Pankaj </span><span id="last-name">Wadhwani</span>
			</h1>
			<div className='nav-option-container'>
				<div className="nav-option"><Link to="/">Home</Link></div>
				<div className="nav-option"><Link to="/projects">Projects</Link></div>
				<div className="nav-option"><Link to="/blogs">Blogs</Link></div>
				<div className="nav-option"><Link to="/resume">Resume</Link></div>
			</div>
			<div className='nav-menu-btn' onClick={(e)=>{myfunc(e)}}>btn</div>
		</nav>
	)
}

export default Nav;
