import {createStore} from 'vuex'

export default createStore({
    strict: true,

    state: {
        productList: [
            {id: 1, author: "Charlotte Bronte", book: "Jane Eyre", goodreads: "4.1/5", price: 20},
            {id: 2, author: "Margaret Mitchell", book: "Gone with the Wind", goodreads: "4.3/5", price: 22},
            {id: 3, author: "Anthony Burgess", book: "A Clockwork Orange", goodreads: "4/5", price: 13},
            {id: 4, author: "Fyodor Dostoevsky", book: "Crime and Punishment", goodreads: "4.2/5", price: 18}
        ]
    },
    getters: {},
    mutations: {},
    actions: {}
})