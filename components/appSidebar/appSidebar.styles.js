export default () => /*css*/ `
    app-sidebar .sidebar-wrapper {
        display:block;
        float:right;
        width:350px;
        height:calc(100% - 45px);
        padding:0 15px;
        background:#fff;
        position:fixed;
        top:65px;
        right:15px;
        bottom:0;
        transition: .5s ease-in;
        z-index:100;
    }

    app-sidebar .sidebar-wrapper::after {
        content:'';
        display:block;
        float:left;
        width:calc(100% - 380px);
        height:calc(100% - 45px);
        position:fixed;
        left:15px;
        top:65px;
        bottom:0;
        background: rgba(0, 0, 0, .5);
        z-index:1000
    }

    app-sidebar .title {
        display:block;
        float:left;
        width:100%;
        padding:15px;
        border-bottom:1px #ebebeb solid;
        font-size: .875em;
        text-transform uppercase;
        margin-bottom:15px;
    }

    app-sidebar .sidebar-butons {
        display:block;
        float:left;
        width:100%;
        padding:15px
    }

    app-sidebar .btn + .btn {
        margin-top:15px;
    }

    app-sidebar .btn {
        display:block;
        float:left;
        width:100%;
        padding:15px;
        border-radius:4px;
        border:1px #ebebeb solid;
        background:#fff;
        font-size: .775em;
        text-transform:uppercase;
        text-align:center;
        text-decoration:none;
        transition: .3s ease-in;
        color:#666;
        cursor:pointer
    }

    app-sidebar .btn-danger:hover{
        border-color: red;
        color: red;
    }

    app-sidebar .btn-success {
        border-color: green;
        color: green
    }

    app-sidebar .btn-success:hover {
        background: green;
        color: #fff
    }
`