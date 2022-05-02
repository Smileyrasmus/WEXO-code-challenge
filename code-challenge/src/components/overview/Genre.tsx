interface Genre {
    genreName: string
}

export default function Genre(props: Genre) {
    return(
        <h1>{props.genreName}</h1>
    )
}