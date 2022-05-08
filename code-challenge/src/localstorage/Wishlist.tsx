export default class Wishlist {
    list: string[]

    constructor(wishlist?: Wishlist) {
        this.list = wishlist?.list ?? JSON.parse(localStorage.getItem("wishlist") ?? "[]")
    }

    /**
     * Add a movie id to this.list and save updated this.list to local storage
     * @param item Movie id as a string
     */
    addItem(item: string): void {
        this.list.push(item)
        localStorage.setItem("wishlist", JSON.stringify(this.list))
    }

    /**
     * Remove a movie id from this.list and save updated this.list to local storage
     * @param item Movie id as a string
     */
    removeItem(item: string): void {
        const indexOfItem = this.list.indexOf(item)
        if(indexOfItem > -1) this.list.splice(indexOfItem, 1)
        localStorage.setItem("wishlist", JSON.stringify(this.list))
    }
}