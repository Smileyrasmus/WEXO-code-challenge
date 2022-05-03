import { NavLink } from "react-router-dom";
import NavCategory from "./NavCategory";
import { useState } from "react"

/**
 * Header component consisting of website name and navigation
 * @returns Header componenet
 */
export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    /**
     * Toggles the menuIsOpen state between true or false
     */
    function toggleMenu(): void {
        menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true)
    }

    function setMenuIsOpenToFalse(): void {
        setMenuIsOpen(false)
    }

    return (
        <header grid-area="Header">
            <span style={{ fontWeight: "bold", fontSize: 24 }}>Wexo Tickets</span>
            <div className="navigation">
                <NavLink className="navLink noselect" to="/" onClick={setMenuIsOpenToFalse}>Home</NavLink>
                <NavCategory toggleMenu={toggleMenu} menuIsOpen={menuIsOpen}/>
                <NavLink className="navLink noselect" to="/wishlist" onClick={setMenuIsOpenToFalse}>Wishlist</NavLink>
            </div>
        </header>
    )
}