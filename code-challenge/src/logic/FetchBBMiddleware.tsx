import Movie from "../types/Movie"

class FetchBBMiddleware {
    baseUrl: string

    constructor() {
        this.baseUrl = "https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas"
    }

    async fetchData(url: string): Promise<any> {
        const response = await fetch(url)
        const json = await response.json()
        return json
    }

    async getByGenre(genre: string): Promise<Movie[]> {
        const url = this.baseUrl + "?form=json&lang=da&byTags=genre:action&range=1-20" 
        const rawData = await this.fetchData(url)
        const movies: Movie[] = []
        for(const rawMovieData of rawData.entries) {
            movies.push(new Movie(rawMovieData))
        }
        return movies
    }

}

export default new FetchBBMiddleware()