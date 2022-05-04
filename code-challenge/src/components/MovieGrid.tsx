import { useState, useEffect } from "react";
import MovieComponent from "./MovieComponent";
import Movie from "../types/Movie";
import FetchBBMiddleware from "../logic/FetchBBMiddleware";

type MovieGridProps = {
    genre: string
    gridType: "movieGrid" | "movieXScroll"
}

export default function MovieGrid(props: MovieGridProps) {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
       async function getMovies() {
           setMovies(await FetchBBMiddleware.getByGenre(props.genre)) 
       }
       getMovies()
    }, [])

    return(
        <div className={props.gridType}>
            {movies.map(movie => {
                return(
                    <MovieComponent key={movie.id} movie={movie}/>
                )
            })}
        </div>
    )
}