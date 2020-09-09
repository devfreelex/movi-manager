import template from './appMovie.template'
import styles from './appMovie.style'

import { appLink } from '../appLink/appLink.component'
import { appMarkTo } from '../appMarkTo/appMarkTo.component'

import { store } from '../../store'

const appMovie = () => {

    const state = {
        movieList: store.get().movieList
    }

    const children = () => ({
        appLink,
        appMarkTo
    })

    const methods = ({pros, state}) => ({

        getMovie (movieId) {
            const { movieList } = state.get()
            return movieList.find( movie => +movie.id === +movieId)
        },

        hasMovies () {
            const { movieList } = state.get()
            return movieList.length
        },

        isSelected () {}

    })

    return {
        state,
        template,
        styles,
        children,
        methods,
    }
}

export { appMovie }