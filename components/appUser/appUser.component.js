import styles from './appUser..styles'
import template from './appUser..template'

import { appLink } from '../appLink/appLink.component'

import { store } from '../../store'

const appUser = () => {

    const state = {
        cpf:'',
        fullName:'',
        userList: store.get().userList
    }

    const children = () => ({
        appLink
    })

    const hooks = ({methods}) => ({
        afterOnInit () {
            methods.setCpf()
        }
    })

    const methods = ({props, state}) => ({
        
        setCpf () {
            const {userId} = props.get().object
            const {userList} = state.get()
            const {cpf} = userList.find( user => +user.id === +userId)
            state.set({cpf})
        },

        getFullName (userId) {
            const { userList } = state.get()
            const user = userList.find( user => +user.id === +userId)
            return `${user.name} ${user.lastName}`
        }

    })

    return {
        state,
        template,
        styles,
        children,
        hooks,
        methods
    }
}

export { appUser }