import { appLink } from './appLink/appLink.component'

const appNotFound = () => {
    
    const state = {
        title: '404',
        description:'Página não encontrada!'
    }

    const children = () => ({
        appLink
    })

    const template = ({props, state}) => /*html*/ `
    <div class="wrapper">
        <h1 class="title">${state.title}</h1>
        <p class="description">${state.description}</p>
        <app-link data-props="{'hash': '#/', 'label':'Voltar'}"></app-link>
    </div>
    `

    const styles = () => /*css*/ `
        app-not-found .wrapper { 
            display:block;
            float:left;
            width:100%;
            padding:45px;
            text-align:center 
        }

        app-not-found .title { 
            font-size:5em;
            color:#8b65d7;
            font-weight:900;
            text-transform:uppercase;
            padding:15px;
        }

        app-not-found .description {
            display:block;
            float:left;
            width:100%;
            text-align:center;
            padding:15px;
            color:#666;            
        }
    `

    return {
        state,
        template,
        styles,
        children
    }
}

export { appNotFound }