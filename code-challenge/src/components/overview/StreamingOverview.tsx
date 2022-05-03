import Genre from "./Genre"
import { useGlobalContext } from "../../contexts/GlobalData"

export default function StreamingOverview() {
    const globalData = useGlobalContext().copy

    return (
        <div>
            {globalData.genres.map(genre => { // for each genre, create a corresponding Genre Componement
                genre = genre[0].toUpperCase() + genre.slice(1)
                return (
                    <Genre key={genre} genreName={genre} />
                )
            })}
        </div>
    )
}