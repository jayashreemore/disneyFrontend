import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
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
					<NavLink to='/Movie' activeclassname='active'>
						Movie
					</NavLink>
				</li>
                <li>
					<NavLink to='/Prince' activeclassname='active'>
						Prince
					</NavLink>
				</li>
                <li>
					<NavLink to='/Princess' activeclassname='active'>
						Princess
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
                    <NavLink to='/contact' activeclass='active'>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Footer;