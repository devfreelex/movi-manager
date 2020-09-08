import template from './appMovieList.template'
import styles from './appMovieList.styles'

import { appTitle } from '../appTitle/appTitle.component'

const appMovieList = () => {

    const children = () => ({
        appTitle
    })

    return {
        template,
        styles,
        children
    }
    
}

export { appMovieList }