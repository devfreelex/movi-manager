export default ({props, state}) => {

    const repeat = (template, dataArr) => {
        return dataArr.map( item => template(item)).join('')
    }

    const movieTpl = (movie) => /*html*/ `
        <app-movie data-props="{'movieId': '${movie.id}'}"></app-movie>
    `
    const userTpl = (user) => /*html*/ `
        <app-user data-props="{'userId': '${user.id}'}"></app-user>
    `

    return /*html*/ `
    <div class="movie-list-wrapper">
        <app-title data-props="{'title':'Vitrine', 'style':'purple'}"></app-title>
        <div class="movie-list">
            <app-title data-props="{'title':'Filmes', 'style':'white'}"></app-title>
            ${repeat(movieTpl, state.movieList)}
        </div>
        <div class="user-list">
        <app-title data-props="{'title':'Clientes', 'style':'white'}"></app-title>
            ${repeat(userTpl, state.userList)}
        </div>
    </div>
`
}