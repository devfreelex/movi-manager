export default ({ props, state }) => /*html*/ `
    <div class="home-wrapper">
        <app-title data-props="{'title':'Vitrine', 'style':'purple'}"></app-title>
        <div class="movie-list">
            <app-title data-props="{'title':'Filmes', 'style':'white'}"></app-title>
            <app-search data-props="{'storeKey':'movieList', 'placeholder':'Buscar filmes'}"></app-search>        
            <app-movie-list></app-movie-list>
        </div>
        <div class="user-list">
            <app-title data-props="{'title':'Clientes', 'style':'white'}"></app-title>
            <app-search data-props="{'storeKey':'userList', 'placeholder':'Buscar clientes'}"></app-search>
            <app-user-list></app-user-list>
        </div>
        <div class="sidebar">
            <app-sidebar data-props="{'showButtons':true, 'buttons':['cancel', 'confirm']}"></app-sidebar>
        </div>
    </div>
`