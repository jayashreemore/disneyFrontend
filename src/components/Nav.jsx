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
					<NavLink to='/Login' activeclassname='active'>
						Login
					</NavLink>
				</li>
                <li>
					<NavLink to='/Register' activeclassname='active'>
						Register
					</NavLink>
				</li>
                <li>
					<NavLink to='/User' activeclassname='active'>
						User
					</NavLink>
				</li>
                <li>
					<NavLink to='/MovieList' activeclassname='active'>
						MovieList
                    </NavLink>
				</li>
                <li>
					<NavLink to='/PrinceList' activeclassname='active'>
						PrinceList
					</NavLink>
				</li>
                <li>
					<NavLink to='/PrincessList' activeclassname='active'>
						PrincessList
					</NavLink>
				</li>
                
                <li>
					<NavLink to='/Search' activeclassname='active'>
						Search
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