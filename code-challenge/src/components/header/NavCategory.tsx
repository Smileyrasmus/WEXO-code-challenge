import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useGlobalContext } from "../../context/GlobalData"

/**
 * A navigation component, with a dropdown menu with links to all categories
 * @returns NavCategory component
 */
type NavCategoryProps = {
    toggleMenu: () => void,
    menuIsOpen: boolean
}

export default function NavCategory(props: NavCategoryProps) {
    const globalData = useGlobalContext().copy
    


    return (
        <div>
            <div
            className={"noselect navLink " + (useLocation().pathname.includes("categories") || props.menuIsOpen ? "active" : "")} // if in categories, mark navlink as active
            onClick={props.toggleMenu}>Categories</div>
            <div
                className="dropdownMenu"
                style={{display:props.menuIsOpen ? "grid" : "none"}} // is only rendered when menuIsOpen is true
            >
                {globalData.genres.map(genre => {
                    genre = genre[0].toUpperCase() + genre.slice(1)
                    return (<NavLink key={genre} to={`/categories/${genre}`} className="test navLink" onClick={props.toggleMenu}>{genre}</NavLink>)
                })}
            </div>
        </div>
    )
}