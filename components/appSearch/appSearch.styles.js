export default () => /*css*/ `
    app-search .search-wrapper {
        display:block;
        float:left;
        width:100%;
        padding:15px;
        margin-bottom:15px;
        border-radius:4px;
        background:#f9f9f9;
    }

    app-search .search-input {
        display:block;
        float:left;
        width:100%;
        padding:15px;
        border:0;
        border-bottom:2px #fff solid;
        border-radius:4px;
        outline:0;
        background:#fff;
        color:#666;
        text-transform: uppercase;
        font-size:.875em
    }

    app-search .search-input:focus {
        border-bottom: 2px #ebebeb solid;
    }
`