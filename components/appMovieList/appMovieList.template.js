export default ({props, state}) => {

    const repeat = (template, dataArr) => {
        return dataArr.map(item => template(item)).join('')
    }

    const movieTpl = (movie) => /*html*/ `
        <app-movie data-props="{'movieId': '${movie.id}'}"></app-movie>
    `    
    return /*html*/ `
        <div class="movie-list-wrapper">
            ${repeat(movieTpl, state.movieList)}    
        </div>
    `
}