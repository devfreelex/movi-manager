import { r9x } from 'r9x_js'
import { appMain as main } from './components/appMain.component'
import { appMovieList } from './components/appMovieList/appMovieList.component'
import { appNotFound } from './components/appNotFound.component'

import './assets/styles/reset.css'
import './assets/styles/main.css'

const routes = {
    firstRoute: { hash: '#/', component: appMovieList },
    defaultRoute: { hash: '#/404', component: appNotFound },
    otherRoutes: [
        { hashExp: /^\#\/$/, component: appMovieList },
    ]
}

const app = r9x()

app.use({
    main,
    routes,
})

app.init()