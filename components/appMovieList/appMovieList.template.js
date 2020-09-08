export default ({props, template}) => /*html*/ `
    <div class="movie-list-wrapper">
        <app-title data-props="{'title':'Vitrine de filmes'}"/>
        <div class="movie-list">
            ${state.movieList.map( movie => /*html*/ `
                <app-movie data-props="{'movieId': '${movie.id}'}"></app-movie>
            `).join('')}
        </div>
        <div class="use-list"></div>
    </div>
`