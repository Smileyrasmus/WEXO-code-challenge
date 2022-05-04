export default class Movie {
    id: string
    title: string
    description: string
    genres: string[]
    programYear: number
    programPubDate: Date
    programType: "movie" | "series"
    poster: string | undefined
    horThumpnail: string | undefined

    constructor(rawDataEntry: any) {
        let idArray = rawDataEntry.id.split("/") // the raw id is a http link. The actual id seems to be the last path in the link
        this.id = idArray[idArray.length - 1] // get the id from the splitted link
        this.title = rawDataEntry.title

        this.genres = []
        for(const tag of rawDataEntry.plprogram$tags) {
            if(tag.plprogram$scheme === "genre") this.genres.push(tag.plprogram$title)
        }

        this.description = rawDataEntry.description
        this.programYear = rawDataEntry.plprogram$year
        this.programPubDate = new Date(rawDataEntry.plprogram$pubDate)
        this.programType = rawDataEntry.plprogram$programType

        for(const key in rawDataEntry.plprogram$thumbnails) {
            const thumpnailObject = rawDataEntry.plprogram$thumbnails[key]
            const isPoster = thumpnailObject.plprogram$assetTypes.some((x: string) => x === "Poster")
            const isThumpnail = thumpnailObject.plprogram$assetTypes.some((x: string) => x === "po-w-medium")
            if(isPoster) this.poster = thumpnailObject.plprogram$url
            if(isThumpnail) this.horThumpnail = thumpnailObject.plprogram$url
        }      
    }
}