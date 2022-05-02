import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"

/**
 * A navigation component, with a dropdown menu with links to all categories
 * @returns NavCategory component
 */
export default function NavCategory() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    /**
     * Toggles the menuIsOpen state between true or false
     */
    function toggleMenu(): void {
        menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true)
    }

    return (
        <div>
            <div
            className={"noselect navLink " + (useLocation().pathname.includes("categories") ? "active" : "")} // if in categories, mark navlink as active
            onClick={toggleMenu}>Categories</div>
            <div
                className="dropdownMenu"
                style={{display:menuIsOpen ? "flex" : "none"}} // is only rendered when menuIsOpen is true
            >
                <NavLink to="/categories/action" className="test navLink" onClick={toggleMenu}>Action</NavLink>
            </div>
        </div>
    )
}