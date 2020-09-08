export default () => /*css*/ `
    app-link .link-wrapper {
        display:inline-block;
    }
    
    app-link .link {
        display:block;
        float:left;
        width:100%;
        padding:10px 15px;
        border-radius:4px;
        font-size: .875em;
        text-align:center;
        border:1px #fff solid;
        color:#d2cad8;
        background:#f7f7f8;
        text-decoration:none;
        outline:none;
        transition:.2s ease-in
    }

    app-link .link:hover {
        border:1px #2ad58e solid;
        color:#2ad58e;
        background:#fff;
    }
`