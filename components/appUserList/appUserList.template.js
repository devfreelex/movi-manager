export default ({props, state}) => {

    const repeat = (template, dataArr) => {
        return dataArr.map(item => template(item)).join('')
    }

    const userTpl = (user) => /*html*/ `
        <app-user data-props="{'userId': '${user.id}'}"></app-user>
    `
    
    return /*html*/ `
        <div class="user-list-wrapper">
            ${repeat(userTpl, state.userList)}
        </div>
    `
}