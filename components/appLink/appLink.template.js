export default ({ props, state }) => /*html*/ `
    <div class="link-wrapper">
        <a href="${props.object.hash}" class="link">
            <i class="las la-plus"></i> ${props.object.label}
        </a>    
    </div>
`