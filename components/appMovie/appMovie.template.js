export default ({props, state, methods}) => {
    if (!methods.hasMovies()) return ''
    const movie = methods.getMovie(props.object.movieId)

    return /*html*/ `
    <div class="movie-wrapper">
        <div class="title">${movie.title}</div>
        <div class="buttons">
            <app-link data-props="{'hash':'#/movie/${props.object.movieId}'}"></app-link>
        </div>
    </div>
`
}