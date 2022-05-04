import Movie from "../types/Movie";
import { useState, useEffect } from "react"
import FetchBBMiddleware from "../logic/FetchBBMiddleware";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
    const [movie, setMovie] = useState<Movie>()

    const { id } = useParams()

    useEffect(() => {
        async function getMovie() {
            setMovie(await FetchBBMiddleware.getMovieById(id))
        }
        getMovie()
    }, [])

    return (
        <div className="movieDetail">
            <img width={"100%"} src={movie?.horThumpnail ?? process.env.PUBLIC_URL + "/Image_not_found.png"} />
            <br />
            <div className="movieDetailFlex">
                <img width={"300px"} src={movie?.poster ?? process.env.PUBLIC_URL + "/Image_not_found_poster.png"} />
                <div className="movieDetailDetails">
                    <b>Title:</b> {movie?.title}<br />
                    <b>Description:</b> {movie?.description}<br />
                    <b>Release year:</b> {movie?.programPubDate.getFullYear()}<br />
                    <b>Genres:</b>
                    <ul className="movieDetailUl">
                        {movie?.genres.map(genre => {
                            return (
                                <li>{genre}</li>
                            )
                        })}
                    </ul>
                </div>
                <br />
            </div>
        </div>
    )
}