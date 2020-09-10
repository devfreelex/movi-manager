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

    const hooks = ({ state, methods }) => ({
        beforeOnInit() {
            store.subscribe(({ search }) => {
                const userList = search.userList
                const hasChanges = methods.hasChanges(state.get().userList, userList)
                if(hasChanges && userList) state.set({userList})
            })
        }
    })   
    
    const methods = () => ({
        
        hasChanges (oldState, newState) {
            const oldStateJson = JSON.stringify(oldState)
            const newStateJson = JSON.stringify(newState)
            return oldStateJson !== newStateJson
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

export { appUserList }