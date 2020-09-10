import { r9x } from 'r9x_js'
import { appMain as main } from './components/appMain.component'
import { appHome } from './components/appHome/appHome.component'
import { appUserDetail } from './components/appUserDetail/appUserDetail.component'
import { appNotFound } from './components/appNotFound.component'

import './assets/styles/reset.css'
import './assets/styles/main.css'

const routes = {
    firstRoute: { hash: '#/', component: appHome },
    defaultRoute: { hash: '#/404', component: appNotFound },
    otherRoutes: [
        { hashExp: /^\#\/$/, component: appHome },
        { hashExp: /^\#\/user\/\d+$/, component: appUserDetail },
    ]
}

const app = r9x()

app.use({
    main,
    routes,
})

app.init()