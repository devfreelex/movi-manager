export default ({props, state, methods}) => {

    const userId = props.object.userId
    
    const buttonsTpl = () => {
        if(props.object.hideButtons && props.object.hideButtons === true) return ''
        return /*html*/ `
            <div class="user-buttons">
                <app-link data-props="{'hash': '#/user/${props.object.userIduserId}'}"></app-link>
                <app-mark-to data-props="{'type':'user', 'userId': '${userId}'}"></app-mark-top>
            </div>        
        `
    }
    
    return /*html*/ `
    <div class="user-wrapper ${methods.isSelected(userId) ? 'selected' : ''}">
        <div class="user-name">Nome: ${methods.getFullName(userId)}</div>
        <div class="user-cpf">CPF: ${state.cpf}</div>
        ${buttonsTpl()}
    </div>`
}