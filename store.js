import { storeFactory } from 'r9x_js'

const store = storeFactory({
    movieList: [
        {id:1, title:'Filme 1', description:'Descrição 1'},
        {id:2, title:'Filme 2', description:'Descrição 2'},
        {id:3, title:'Filme 3', description:'Descrição 3'},
        {id:4, title:'Filme 4', description:'Descrição 4'},
    ]  
})

export { store }