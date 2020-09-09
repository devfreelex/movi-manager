export default ({props, state, methods}) => { 

    const buttons = {
        cancel: /*html*/`<button class="btn btn-danger btn-cancel">Cancelar</button>`,
        confirm: /*html*/`<button id="confirm" class="btn btn-success">Confirmar</button>`,
    }

    const toggleButtons = () => {
        if(!props.object.showButtons) return ''
        if(!props.object.buttons || !props.object.buttons.length) return ''
        return props.object.buttons.map( buttonName => buttons[buttonName]).join('')
    }

    if (!state.showSidebar) return ''

    return /*html*/ `
        <div class="sidebar-wrapper">
            <h1 class="title">Locação</h1>
            <div class="content">
                <app-user data-props="{'userId': '${state.client.id}', 'hideButtons':true }"></app-user>
                <app-movie data-props="{'movieId': '${state.movie.id}', 'hideButtons':true }"></app-movie>
            </div>
            ${toggleButtons()}           
        </div>
    `
}