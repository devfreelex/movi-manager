import styles from './appUser..styles'
import template from './appUser..template'

import { appLink } from '../appLink/appLink.component'
import { appMarkTo } from '../appMarkTo/appMarkTo.component'

import { store } from '../../store'

const appUser = () => {

    const state = {
        cpf:'',
        fullName:'',
        selected: false,
        userList: store.get().userList,
    }

    const children = () => ({
        appLink,
        appMarkTo
    })

    const hooks = ({methods}) => ({

        beforeOnInit () {
            store.subscribe((payload) => {
                methods.userInOperation(payload) ? methods.selectUser() : methods.unselectUser()
            })
        },

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
        },

        isSelected (userId) {
            const { operation } = store.get()
            return (operation.client !== null && +operation.client.id === +userId)
        },

        selectUser () {
            state.set({selected: true})
        },
        unselectUser () {
            state.set({ selected: false })
        },

        userInOperation(dataStore) {
            const { operation } = dataStore
            const { object } = props.get()
            return operation.client !== null && +operation.client.id === +object.userId
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