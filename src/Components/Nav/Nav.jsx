import logo from "../../images/dm_white_logo.png"
import "./Nav.css"
import { NavLink } from "react-router-dom"

export default function Nav() {
    return (
        <div className="Nav">
            <div>
                <img src={logo} alt="dm logo" />
            </div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/topics">Topics</NavLink>
                </li>
            </ul>
        </div>
    )
}
