import MovieGrid from "../MovieGrid"

interface Genre {
    genreName: string
}

export default function Genre(props: Genre) {
    return(
        <div className="genre">
            <h1>{props.genreName}</h1>
            <MovieGrid genre={props.genreName} gridType={"movieXScroll"}/>
        </div>
    )
}