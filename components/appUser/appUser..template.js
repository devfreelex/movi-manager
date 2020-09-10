export default ({props, state, methods}) => {

    const userId = props.object.userId

    const notHaveButtons = () => props.object.hideButtons && props.object.hideButtons === true
    
    const buttonsTpl = () => {
        if (notHaveButtons()) return ''
        return /*html*/ `
            <div class="user-buttons">
                <app-link data-props="{'hash': '#/user/${props.object.userId}'}"></app-link>
                <app-mark-to data-props="{'type':'user', 'userId': '${userId}'}"></app-mark-top>
            </div>        
        `
    }
    
    return /*html*/ `
    <div class="user-wrapper ${methods.isSelected(userId) && !notHaveButtons() ? 'selected' : ''}">
        <div class="user-name"> ${methods.getFullName(userId)}</div>
        <div class="user-cpf">CPF: ${state.cpf}</div>
        ${buttonsTpl()}
    </div>`
}