import {ADD_TO_CART, REMOVE_FROM_CART, ORDER} from './constants'
import {AppState} from '../../store'



export const cartReducer = (state=AppState, action) => {
    switch (action.type){
        case ADD_TO_CART:
            const book = state.books.find(item => item.id == action.id)
            const index = state.cartBooks.findIndex(({id}) => id == action.id)
            const item = state.cartBooks[index]

            let newItem; 
            if (item) {
                newItem = {
                    ...item,
                    amount: item.amount + 1,
                }
            } else {
                newItem = {
                    amount: 1,
                    title: book.title,
                    price: book.price
                };
            }
            return {
                ...state, 
                cartBooks: [...state.cartBooks, newItem], 
                }
        case REMOVE_FROM_CART: 
            return {
                ...state, 
                cartBooks: state.cartBooks.filter(item => item.id != action.payload),  
                }
        case ORDER: 
            return {
                ...state, 
                // books: [...state.books, action.payload], 
                }
        default:
            return state
    }
}