import Movie from "../types/Movie";

type MovieComponentProps = {
    movie: Movie
}

export default function MovieComponent(props: MovieComponentProps) {
    return(
        <div>
            <img src={props.movie.horThumpnail ?? process.env.PUBLIC_URL + "/Image_not_found.png"} />
            <b>{props.movie.title}</b>
        </div>
    )
}