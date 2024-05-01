import { NavLink } from "react-router-dom";

function Nav() {
	return (
		<nav className="header-menu">
			<ul>
				<li>
					<NavLink to='/' activeclass='active'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/Register' activeclassname='active'>
						Register
					</NavLink>
				</li>
				<li>
					<NavLink to='/Login' activeclassname='active'>
						Login
					</NavLink>
				</li>
				<li>
					<NavLink to='/UserForm' activeclassname='active'>
						UserForm
					</NavLink>
				</li>
				<li>
					<NavLink to='/Movies' activeclassname='active'>
						Movies
					</NavLink>
				</li>
				<li>
					<NavLink to='/Princes' activeclassname='active'>
						Princes
					</NavLink>
				</li>
				<li>
					<NavLink to='/Princesses' activeclassname='active'>
						Princesses
					</NavLink>
				</li>


				<li>
					<NavLink to='/Review' activeclassname='active'>
						Review
					</NavLink>
				</li>
				<li>
					<NavLink to='/about' activeclass='active'>
						About
					</NavLink>

				</li>
				<li>
					<NavLink to='/notfound' activeclass='active'>
						NotFound
					</NavLink>

				</li>

			</ul>
		</nav>
	);
}

export default Nav;