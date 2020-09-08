export default ({props, state, methods}) => { 

    if (!state.showSidebar) return ''

    return /*html*/ `
        <div class="sidebar-wrapper">
            <h1 class="title">Locação</h1>
            <div class="content">
                <app-user data-props="{'userId': '${state.client.id}'}"></app-user>
                <app-movie data-props="{'movieId': '${state.movie.id}'}"></app-movie>
            </div>
            <div class="sidebar-buttons">
                <button class="btn btn-danger btn-cancel">Cancelar</button>
                <button id="confirm" class="btn btn-success">Confirmar</button>
            </div>            
        </div>
    `
}