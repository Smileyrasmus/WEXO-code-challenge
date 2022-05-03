import MovieGrid from "../MovieGrid"

interface Genre {
    genreName: string
}

export default function Genre(props: Genre) {
    return(
        <div>
            <h1>{props.genreName}</h1>
            <MovieGrid genre={props.genreName}/>
        </div>
    )
}