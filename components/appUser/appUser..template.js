export default ({props, state, methods}) => /*html*/ `
    <div class="user-wrapper">
        <div class="user-name">Nome: ${methods.getFullName(props.object.userId)}</div>
        <div class="user-cpf">CPF: ${state.cpf}</div>
        <div class="user-buttons">
            <app-link data-props="{'hash': '#/user/${props.object.userId}'}"></app-link>
        </div>
    </div>
`