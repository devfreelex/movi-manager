import template from './appUserDetail.template'
import styles from './appUserDetail.styles'
import { store } from '../../store'
import { appUser } from '../appUser/appUser.component'
import { appMovie } from '../appMovie/appMovie.component'
import { appTitle } from '../appTitle/appTitle.component'
import { appLink } from '../appLink/appLink.component'

const appUserDetail = () => {

    const state = {
        user: null
    }
    
    const children = () => ({ 
        appMovie,
        appTitle,
        appLink,
        appUser
    })

    const hooks = ({methods}) => ({
       
        beforeOnInit () {
            methods.getUserById()
        }

    })

    const methods = ({props, state}) => ({

        getHashId () {
            return +window.location.hash.split('/').pop()
        },

        getUserById () {
            const userId = this.getHashId()
            const user = store.get().userList.find( user => user.id === userId)
            state.set({ user })
        }

    })

    return {
        template,
        styles,
        methods,
        hooks,
        children
    }

}

export { appUserDetail }