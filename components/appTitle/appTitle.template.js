export default ({props, state}) => {
    return /*html*/ `
    <div class="title-wrapper">
        <h1 class="title ${props.object.style ? props.object.style : ''}">${props.object.title}</h1>
    </div>`
}