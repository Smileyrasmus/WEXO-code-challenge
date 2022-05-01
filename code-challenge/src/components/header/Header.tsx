import { NavLink } from "react-router-dom";
import NavCategory from "./NavCategory";

/**
 * Header component consisting of website name and navigation
 * @returns Header componenet
 */
export default function Header() {


    return (
        <header grid-area="Header">
            <span style={{ fontWeight: "bold", fontSize: 24 }}>Wexo Tickets</span>
            <div className="navigation">
                <NavLink className="navLink noselect" to="/">Home</NavLink>
                <NavCategory />
            </div>
        </header>
    )
}