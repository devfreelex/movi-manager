import template from './appMarkTo.template'
import styles from './appMarkTo.styles'
import { store } from '../../store'

const appMarkTo = () => {

    const events = ({query, on, methods}) => ({
        
        onClickToSelect () {
            const btn = query('button')
            on('click', [btn], (e) => {
                methods.setOperation()
            })
        }
        
    })

    const methods = ({props, state}) => {

        const setUserOperation = (userId) => {
            store.update((dataStore) => {
                const user = dataStore.userList.find( user => +user.id === +userId)
                dataStore.operation.client = user
            })

            console.log(store.get().operation)
        }

        const setMovieOperation = (movieId) => {
            store.update((dataStore) => {
                const movie = dataStore.movieList.find(movie => +movie.id === +movieId)
                dataStore.operation.movie = movie
            })
            console.log(store.get().operation)
        }

        const setOperation = () => {
            const { object } = props.get()
            if(object.type && object.type === 'user') return setUserOperation(object.userId)
            if(object.type && object.type === 'movie') return setMovieOperation(object.movieId)
        }

        return { setOperation }
    }

    return {
        template,
        styles,
        events,
        methods
    }

}

export {
    appMarkTo
}