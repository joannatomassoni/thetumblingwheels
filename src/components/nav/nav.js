import React from 'react';
import { Link } from 'gatsby';
import navStyles from './nav.module.scss'

const Nav = () => {
	
	return (
		<div className={navStyles.header}>
			<input type='checkbox' aria-label="checkbox" className={navStyles.toggler}/>
			<div className={navStyles.hamburger}><div></div></div>
				<nav className={navStyles.nav}>
					<ul className={navStyles.navItems}>
						<Link to='/' activeStyle={{ color: '#fff2df' }} className={navStyles.navItem} activeClassName={navStyles.activeNavItem}>Home</Link>
						<a href='https://thetumblingwheels.bandcamp.com/' target='blank' className={navStyles.navItem} activeClassName={navStyles.activeNavItem}>Music</a>
						<Link to='/videos' className={navStyles.navItem} activeClassName={navStyles.activeNavItem}>Videos</Link>
						<Link to='/contact' className={navStyles.navItem} activeClassName={navStyles.activeNavItem}>Contact</Link>
					</ul>
				</nav>

		</div>
	)
}

export default Nav;