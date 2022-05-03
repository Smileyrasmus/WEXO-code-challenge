export default class Movie {
    id: string
    title: string
    description: string
    programYear: number
    programPubDate: Date
    programType: "movie" | "series"
    poster: string | null | undefined
    horThumpnail: string | null | undefined

    constructor(rawDataEntry: any) {
        this.id = rawDataEntry.id
        this.title = rawDataEntry.title
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