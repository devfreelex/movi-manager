import template from './appMovie.template'
import styles from './appMovie.style'
import { store } from '../../store'

const appMovie = () => {

    const state = {
        movieList: store.get().movieList
    }

    const methods = ({pros, state}) => ({

        getMovie (movieId) {
            const { movieList } = state.get()
            return movieList.find( movie => +movie.id === +movieId)
        },

        hasMovies () {
            const { movieList } = state.get()
            return movieList.length
        }

    })

    return {
        state,
        template,
        styles,
        methods,
    }
}

export { appMovie }