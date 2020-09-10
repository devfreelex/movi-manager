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


    const hooks = ({ state, methods }) => ({
        beforeOnInit() {
            store.subscribe(({ search }) => {
                const movieList = search.movieList
                const hasChanges = methods.hasChanges(state.get().movieList, movieList)
                if(hasChanges && movieList) state.set({ movieList })
            })
        }
    })

    const methods = () => ({

        hasChanges(oldState, newState) {
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

export { appMovieList }