export default ({props, state, methods}) => {
    if (!methods.hasMovies()) return ''
    console.log(props.object)
    const movie = methods.getMovie(props.object.movieId)

    return /*html*/ `
    <div class="movie-wrapper">
        <div class="title">${movie.title}</div>
    </div>
`
}