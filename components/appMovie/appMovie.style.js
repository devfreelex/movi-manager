export default () => /*css*/ `
    app-movie .movie-wrapper {
        display:block;
        float:left;
        width:100%;
        padding:15px;
        margin-bottom:15px;
        border-radius:4px;
        border:1px #f7f6f8 solid;
        background:#fff;
        box-shadow: 3px 3px 3px #f4f3f6
    }

    app-movie .selected {border-color:#2ad58e}

    app-movie .title {
        font-weight:700
    }

    app-movie .title,
    app-movie .description {
        display:block;
        float:left;
        width:100%;
        padding-bottom: 15px;
        border-bottom:1px #ebebeb solid;
        color:#666;
        font-size:1em;
        text-transform:uppercase;
        line-height:1.5em
    }

    app-movie .description {
        text-transform: none;
        padding-top:15px;
        border-bottom:none;
        font-weight:500
    }

    app-movie .buttons {
        display:block;
        float:left;
        width:100%;
        padding-top:15px;
        text-align:right;
    }
`