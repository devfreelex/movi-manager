export default ({props, state}) => /*html*/ `
    <div class="search-wrapper">
        <input key="${props.object.storeKey}" type="text" class="search-input" placeholder="${props.object.placeholder}">
    </div>
`