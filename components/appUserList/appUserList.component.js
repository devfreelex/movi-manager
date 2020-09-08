import template from './appUserList.template'
import styles from './appUserList.styles'

import { appUser } from '../appUser/appUser.component'

import { store } from '../../store'

const appUserList = () => {

    const state = {
        userList: store.get().userList
    }

    const children = () => ({
        appUser
    })

    const hooks = ({ state }) => ({
        beforeOnInit() {
            store.subscribe(({search}) => {
                const userList = search?.userList
                state.set({userList})
            })
        }
    })    

    return {
        state,
        template,
        styles,
        children,
        hooks
    }
}

export { appUserList }