export default ({props, state, methods}) => {

    if (!methods.hasMovies()) return ''
    const movie = methods.getMovie(props.object.movieId)
    const notHaveButtons = () => props.object.hideButtons && props.object.hideButtons === true

    const buttonsTpl = () => {
        if (notHaveButtons()) return ''
        return /*html*/ `
            <app-link data-props="{'hash':'#/movie/${props.object.movieId}'}"></app-link>
            <app-mark-to data-props="{'type':'movie', 'movieId':'${props.object.movieId}'}"></app-mark-to>
        `
    }

    return /*html*/ `
    <div class="movie-wrapper ${methods.isSelected(props.object.movieId) && !notHaveButtons() ? 'selected' : ''}">
        <div class="title">${movie.title}</div>
        <div class="description">${movie.title} - ${movie.description}</div>
        <div class="buttons">
            ${buttonsTpl()}
        </div>
    </div>
`
}