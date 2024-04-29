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
					<NavLink to='/products' activeclassname='active'>
						Products
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