import template from './appHome.template'
import styles from './appHome.styles'

import { appTitle } from '../appTitle/appTitle.component'
import { appMovieList } from '../appMovieList/appMovieList.component'
import { appUser } from '../appUser/appUser.component'
import { appSearch } from '../appSearch/appSearch.component'

import { store } from '../../store'

const appHome = () => {

    const state = {
        movieList: store.get().movieList,
        userList: store.get().userList
    }

    const children = () => ({
        appTitle,
        appMovieList,
        appUser,
        appSearch
    })

    const hooks = ({state}) => ({
        beforeOnInit () {
            // store.subscribe(({search}) => {
            //     const movieList = search?.movieList
            //     const userList = search?.userList
            //     state.set({movieList, userList})
            // })
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

export { appHome }