import { storeFactory } from 'r9x_js'

const store = storeFactory({
    movieList: [
        { id: 1, title: 'Ultimos dias', description:'Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem num gosta di mé,'},
        {id:2, title:'Fim dos dias', description:'Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem num gosta di mé,'},
        {id:3, title:'Málevola', description:'Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem num gosta di mé,'},
        {id:4, title:'A rainha má', description:'Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem num gosta di mé,'},
    ],
    userList: [
        { id: 1, name: 'Rodrigo', lastName:'Rocha', cpf:'9995586655', movies:[] },
        { id: 2, name: 'Roberto', lastName:'Montana', cpf:'6665544788', movies:[] },
        { id: 3, name: 'Rafaela', lastName:'Fontes', cpf:'2254447895', movies:[] },
        { id: 4, name: 'Tatiana', lastName:'Alvarez', cpf:'3321145589', movies:[] },        
    ],
    operation: {
        client: null,
        movie: null
    },
})

export { store }