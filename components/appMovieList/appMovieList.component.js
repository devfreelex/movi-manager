import template from './appMovieList.template'
import styles from './appMovieList.styles'

import { appMovie } from '../appMovie/appMovie.component'

import { store } from '../../store'

const appMovieList = () => {

    const state = {
        movieList: store.get().movieList,
    }

    const children = () => ({
        appMovie
    })


    const hooks = ({ state }) => ({
        beforeOnInit() {
            store.subscribe(({ search }) => {
                const movieList = search?.movieList
                 state.set({ movieList })
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

export { appMovieList }