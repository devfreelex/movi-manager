export default () => /*css*/ `
    app-user .user-wrapper {
        display:block;
        float:left;
        width:100%;
        padding:15px;
        margin-bottom:15px;
        border-radius:4px;
        border:1px #f7f6f8 solid;
        background:#fff;
        box-shadow: 3px 3px 3px #f4f3f6;
        text-align:left;
    }

    app-user .selected {border-color:#2ad58e}

    app-user .user-name,
    app-user .user-cpf {
        display:block;
        float:left;
        width:100%;
        padding-bottom: 15px;
        border-bottom:1px #ebebeb solid;
        margin-bottom:15px;
    }

    app-user .user-name {
        font-weight:700;
        margin-bottom:0;
        border-bottom:none;
    }
    
    app-user .user-name,
    app-user .user-cpf {
        display:block;
        float:left;
        width:100%;
        padding-bottom: 15px;
        border-bottom:1px #ebebeb solid;
        color:#666;
        font-size:1em;
        text-transform:uppercase;
        line-height:1.5em;
    }

    app-user .user-cpf {
        text-transform: none;
        padding-top:15px;
    }    

    app-user .user-buttons {
        display:block;
        float:left;
        width:100%;
        text-align:right;
    }

`