export default () => /*css*/ `
    app-home .home-wrapper {
        display:block;
        float:left;
        width:100%;
        padding:15px;
    }

    app-home .movie-list,
    app-home .user-list {
        display:block;
        float:left;
        width:calc(50% - 7.5px);
        padding:15px;
    }

    app-home .user-list {
        margin-left:15px;
    }

    app-home .sidebar {
        display:block;
        float:right;
        width:250px;
        position:relative;
    }
`