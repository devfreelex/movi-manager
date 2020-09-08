import template from './appHome.template'
import styles from './appHome.styles'

import { appTitle } from '../appTitle/appTitle.component'
import { appMovieList } from '../appMovieList/appMovieList.component'
import { appUserList } from '../appUserList/appUserList.component'
import { appSearch } from '../appSearch/appSearch.component'

import { store } from '../../store'

const appHome = () => {

    const children = () => ({
        appTitle,
        appMovieList,
        appUserList,
        appSearch
    })

    return {
        template,
        styles,
        children,
    }
    
}

export { appHome }