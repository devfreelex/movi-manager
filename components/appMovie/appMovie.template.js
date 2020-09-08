export default ({props, state, methods}) => {
    if (!methods.hasMovies()) return ''
    const movie = methods.getMovie(props.object.movieId)
    const buttonsTpl = () => {
        if(props.object.hideButtons && props.object.hideButtons === true) return ''
        return /*html*/ `<app-link data-props="{'hash':'#/movie/${props.object.movieId}'}"></app-link>`
    }

    return /*html*/ `
    <div class="movie-wrapper">
        <div class="title">${movie.title}</div>
        <div class="buttons">
            ${buttonsTpl()}
        </div>
    </div>
`
}