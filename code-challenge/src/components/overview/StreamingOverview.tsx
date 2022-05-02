import Genre from "./Genre"
import { useGlobalContext } from "../../context/GlobalData"

export default function StreamingOverview() {
    const globalData = useGlobalContext().copy

    return (
        <div>
            {globalData.genres.map(genre => { // for each genre, create a corresponding Genre Componement
                return (<Genre key={genre} genreName={genre} />) // add key prop to remove warning from logs
            })}
        </div>
    )
}