import template from './appSearch.template'
import styles from './appSearch.styles'
import { store } from '../../store'

const appSearch = () => {

    const events = ({on, query, methods, directives}) => ({
        onType () {
            const input = query('.search-input')
            let value = ''

            on('keyup', [input], ({target}) => { 
                if(target.value) value = target.value
                methods.filterMovies({target})
            })

        }
    })

    const methods = ({props, state}) => ({
        getSelector (input) {
            return input.getAttribute('key')
        },

        filterMovies ({target}) {
            const { storeKey } = props.get().object
            const { value } = target
            const regex = new RegExp(`${value}`,'ig')

            const result = store.get()[storeKey].filter( item => {
                const itemKeys = Object.keys(item)
                return itemKeys.filter(key => item[key].toString().match(regex)).join('')
            })

            store.update((storeData) => {
                if(!storeData.hasOwnProperty('search')) storeData.search = {}
                storeData.search[storeKey] = result
            })

        }
    })

    return {
        template,
        styles,
        events,
        methods,
    }
}

export { appSearch }