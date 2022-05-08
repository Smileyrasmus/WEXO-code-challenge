import { createContext, useContext } from "react"
import Wishlist from "../localstorage/Wishlist"
// Reference: https://dev.to/madv/usecontext-with-typescript-23ln

/**
 * Type which descripes the structure of the global data
 */
export type IGlobalData = {
    genres: string[],
    wishlist: Wishlist
}

/**
 * Descripes custom GlobalContext object
 */
export type IGlobalContext = {
    copy: IGlobalData,
    setCopy: (c: IGlobalData) => void
}

/**
 * Our custom React hook to create our GlobalContext object
 */
export const GlobalContext = createContext<IGlobalContext>({
    copy: { // defualt value of global context
        genres: [],
        wishlist: new Wishlist()
    },
    setCopy: () => { }
})

/**
 * Our custom React hook to use our GlobalContext object
 */
export const useGlobalContext = () => useContext(GlobalContext)
