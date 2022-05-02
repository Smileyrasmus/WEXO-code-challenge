import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useGlobalContext } from "../../context/GlobalData"

/**
 * A navigation component, with a dropdown menu with links to all categories
 * @returns NavCategory component
 */
export default function NavCategory() {
    const globalData = useGlobalContext().copy
    
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
                style={{display:menuIsOpen ? "grid" : "none"}} // is only rendered when menuIsOpen is true
            >
                {globalData.genres.map(genre => {
                    genre = genre[0].toUpperCase() + genre.slice(1)
                    return (<NavLink key={genre} to={`/categories/${genre}`} className="test navLink" onClick={toggleMenu}>{genre}</NavLink>)
                })}
            </div>
        </div>
    )
}