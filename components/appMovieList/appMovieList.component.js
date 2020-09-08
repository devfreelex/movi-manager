import template from './appMovieList.template'
import styles from './appMovieList.styles'

import { appTitle } from '../appTitle/appTitle.component'
import { appMovie } from '../appMovie/appMovie.component'
import { store } from '../../store'

const appMovieList = () => {

    const state = {
        movieList: store.get().movieList
    }

    const children = () => ({
        appTitle,
        appMovie,
    })

    return {
        state,
        template,
        styles,
        children
    }
    
}

export { appMovieList }