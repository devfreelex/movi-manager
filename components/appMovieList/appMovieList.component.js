import template from './appMovieList.template'
import styles from './appMovieList.styles'

import { appTitle } from '../appTitle/appTitle.component'
import { appMovie } from '../appMovie/appMovie.component'
import { appUser } from '../appUser/appUser.component'
import { appSearch } from '../appSearch/appSearch.component'

import { store } from '../../store'

const appMovieList = () => {

    const state = {
        movieList: store.get().movieList,
        userList: store.get().userList
    }

    const children = () => ({
        appTitle,
        appMovie,
        appUser,
        appSearch
    })

    const hooks = ({state}) => ({
        beforeOnInit () {
            store.subscribe(({search}) => {
                const movieList = search?.movieList
                const userList = search?.userList
                state.set({movieList, userList})
            })
        }
    })

    return {
        state,
        template,
        styles,
        children,
        hooks,
    }
    
}

export { appMovieList }