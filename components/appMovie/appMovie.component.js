import template from './appMovie.template'
import styles from './appMovie.style'

import { appMarkTo } from '../appMarkTo/appMarkTo.component'

import { store } from '../../store'

const appMovie = () => {

    const state = {
        movieList: store.get().movieList,
        selected: false
    }

    const children = () => ({
        appMarkTo
    })

    const hooks = ({methods}) => ({

        beforeOnInit() {
            store.subscribe((payload) => {
                methods.movieInOperation(payload) ? methods.selectMovie() : methods.unselectMovie()
            })
        },        

    })

    const methods = ({props, state}) => ({

        getMovie (movieId) {
            const { movieList } = state.get()
            return movieList.find( movie => +movie.id === +movieId)
        },

        hasMovies () {
            const { movieList } = state.get()
            return movieList.length
        },

        isSelected(movieId) {
            const { operation } = store.get()
            return (operation.movie !== null && +operation.movie.id === +movieId)
        },

        selectMovie() {
            state.set({ selected: true })
        },
        unselectMovie() {
            state.set({ selected: false })
        },

        movieInOperation(dataStore) {
            const { operation } = dataStore
            const { object } = props.get()
            return operation.movie !== null && +operation.movie.id === +object.movieId
        }

    })

    return {
        state,
        template,
        styles,
        children,
        hooks,
        methods,
    }
}

export { appMovie }