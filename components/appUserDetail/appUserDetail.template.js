export default ({props, state}) => {
    const repeat = (template, dataArr) => {
        return dataArr.map(item => template(item)).join('')
    }

    const movieTpl = (movie) => /*html*/ `
        <div class="grid">
            <app-movie data-props="{'movieId': '${movie.id}'}"></app-movie>
        </div>
    `   

    return /*html*/ `
        <div class="detail-wrapper">
        <app-title data-props="{'title':'Hitórico de locações', 'style':'purple'}"></app-title>
            <div class="content">
                <div class="row">
                    <app-link data-props="{'hash': '#/', 'label':'Voltar'}"></app-link>
                </div>
                <div class="row">
                    <app-user data-props="{'userId': '${state.user.id}', 'hideButtons':true}"></app-user>
                </div>
                ${repeat(movieTpl, state.user.movies)}    
            </div>
        </div>
    `

}