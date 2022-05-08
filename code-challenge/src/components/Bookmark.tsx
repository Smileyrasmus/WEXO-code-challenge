import { ReactComponent as BookmarkSvg } from "../Bookmark-icon.svg"
import { useState, useEffect } from "react"
import { useGlobalContext } from "../contexts/GlobalData"
import Wishlist from "../localstorage/Wishlist"

interface BookmarkProps {
    movieId: string
}

/**
 * Bookmark toggler button thingy
 * @param props properties of the individual bookmark, in which a movieId is expected to define what this bookmark represents
 * @returns A bookmark JSX object
 */
export default function Bookmark(props: BookmarkProps) {
    const globalContext = useGlobalContext()

    /**
     * Why so many states? Why not just directly edit the global context instead of dealing
     * with copying objects? Because editing the global context directly, will make 'setCopy' hook useless.
     * If i did 'globalContext.setCopy(globalContext.copy)' the setCopy hook would not rerender any components,
     * becuase for all it knows there is no difference between 'globalContext.copy' and 'globelContext.copy'.
     * They are the same Never edit state objects directly!
     */
    const [globalData, setGlobalData] = useState(globalContext.copy) // insert standard value for very first render
    const [wishlist, setWishlist] = useState(globalContext.copy.wishlist) // insert standard value for very first render
    const [isBookmarked, setIsBookmarked] = useState(false)

    function toggleIsBookMarked() {
        const toggleValue = isBookmarked ? false : true
        setIsBookmarked(toggleValue)
        if (toggleValue) {
            wishlist.addItem(props.movieId)
        } else {
            wishlist.removeItem(props.movieId)
        }
        globalData.wishlist = wishlist // add updated wishlist to globaldata
        globalContext.setCopy(globalData) // update globalContext
    }

    useEffect(() => {
        wishlist.list.some(wishlistId => wishlistId === props.movieId) ? setIsBookmarked(true) : setIsBookmarked(false)
        setGlobalData(JSON.parse(JSON.stringify(globalContext.copy))) //simple copy of all object attributes (object functions lost)
        setWishlist(new Wishlist(wishlist)) // own copy object implementation, as the copy above does not copy object functions
    }, [globalContext]) // every time globalContext changes, run this useEffect block

    return (
        <BookmarkSvg className={"bookmark" + (isBookmarked ? " isBookmarked" : "")} onClick={toggleIsBookMarked} />
    )
}