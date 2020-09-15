import template from './appSidebar.template'
import styles from './appSidebar.styles'

import { appUser } from '../appUser/appUser.component'
import { appMovie } from '../appMovie/appMovie.component'
import { store } from '../../store'

const appSidebar = () => {

    const state = {
        client: null,
        movie: null,
        showSidebar: false
    }

    const children = () => ({
        appUser,
        appMovie
    })

    const hooks = ({state, methods}) => ({
        beforeOnInit () {
            store.subscribe((dataStore) => {
                const { client, movie } = dataStore.operation
                let showSidebar = methods.hasClientAndMovie()
                state.set({client, movie, showSidebar})
            })
        }
    })

    const events = ({query, on, methods}) => ({
        onClickToCancel () {
            const btnCancel = query('.btn-cancel')
            if(!btnCancel) return
            on('click', [btnCancel], methods.clearOperation)
        },

        onClickToConfirm () {
            const btnSuccess = query('.btn-success')
            if(!btnSuccess) return
            on('click', [btnSuccess], methods.saveOperation)
        }
    })

    const methods = ({props, state}) => ({

        clearOperation () {
            store.update((dataStore) => {
                dataStore.operation = {client:null, movie:null}
            })
        },

        saveOperation () {
            store.update((dataStore) => {
                const {movie, client} = state.get()
                const user = dataStore.userList.find( user => +user.id === +client.id)
                user.movies.push(movie)
                dataStore.operation = { client: null, movie: null }
            })
        },
    
        hasClientAndMovie () {
            const { operation } = store.get()
            return (operation.client && operation.movie) !== null
        }

    })
    
    return {
        state,
        methods,
        children,
        hooks,
        events,
        template,
        styles
    }
}

export { appSidebar }