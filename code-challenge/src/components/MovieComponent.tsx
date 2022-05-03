import Movie from "../types/Movie";

type MovieComponentProps = {
    movie: Movie
}

export default function MovieComponent(props: MovieComponentProps) {
    return(
        <div>{props.movie.title}</div>
    )
}