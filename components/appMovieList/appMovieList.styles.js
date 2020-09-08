export default () => /*css*/ `
    app-movie-list .movie-list-wrapper {
        display:block;
        float:left;
        width:100%;
        padding:15px;
    }

    app-movie-list .movie-list,
    app-movie-list .user-list {
        display:block;
        float:left;
        width:calc(50% - 7.5px);
        border-radius:4px;
        border:1px #f4f2f7 solid;
        padding:15px;
        background:#fcfcfd
    }

    app-movie-list .user-list {
        margin-left:15px;
    }
`