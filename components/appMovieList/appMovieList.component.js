import template from './appMovieList.template'
import styles from './appMovieList.styles'

import { appTitle } from '../appTitle/appTitle.component'
import { appMovie } from '../appMovie/appMovie.component'
import { appUser } from '../appUser/appUser.component'

import { store } from '../../store'

const appMovieList = () => {

    const state = {
        movieList: store.get().movieList,
        userList: store.get().userList
    }

    const children = () => ({
        appTitle,
        appMovie,
        appUser
    })

    return {
        state,
        template,
        styles,
        children
    }
    
}

export { appMovieList }