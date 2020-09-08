export default ({props, state}) => {

    const repeat = (template, dataArr) => {
        return dataArr.map( item => template(item)).join('')
    }

    const movieTpl = (movie) => /*html*/ `
        <app-movie data-props="{'movieId': '${movie.id}'}"></app-movie>
    `

    return /*html*/ `
    <div class="movie-list-wrapper">
        <app-title data-props="{'title':'Filmes'}"></app-title>
        <div class="movie-list">
            ${repeat(movieTpl, state.movieList)}
        </div>
        <div class="user-list"></div>
    </div>
`
}