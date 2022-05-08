import Movie from "../types/Movie";
import {Link} from "react-router-dom"
import Bookmark from "./Bookmark"

type MovieComponentProps = {
    movie: Movie
}

export default function MovieComponent(props: MovieComponentProps) {
    return(
        <div className="movieComponent">
            <Bookmark movieId={props.movie.id}/>            
            <Link className="link" to={`movies/${props.movie.id}`}>
                <img src={props.movie.horThumpnail ?? process.env.PUBLIC_URL + "/Image_not_found.png"} />
                <b>{props.movie.title}</b>
            </Link>
        </div>
    )
}