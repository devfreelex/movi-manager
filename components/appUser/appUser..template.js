export default ({props, state, methods}) => {

    const buttonsTpl = () => {
        if(props.object.hideButtons && props.object.hideButtons === true) return ''
        return /*html*/ `
            <div class="user-buttons">
                <app-link data-props="{'hash': '#/user/${props.object.userId}'}"></app-link>
            </div>        
        `
    }
    
    return /*html*/ `
    <div class="user-wrapper">
        <div class="user-name">Nome: ${methods.getFullName(props.object.userId)}</div>
        <div class="user-cpf">CPF: ${state.cpf}</div>
        ${buttonsTpl()}
    </div>`
}