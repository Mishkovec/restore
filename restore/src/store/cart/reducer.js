import {ADD_TO_CART, REMOVE_FROM_CART, ORDER} from './constants'
import {AppState} from '../../store'

export const cartReducer = (state=AppState, action) => {
    switch (action.type){
        case ADD_TO_CART:
            let book = state.books.find(item => item.id == action.payload)
            return {
                ...state, 
                cartBooks: [...state.cartBooks, book], 
                }
        case REMOVE_FROM_CART: 
            return {
                ...state, 
                cartBooks: state.books.filter(item => item.id != action.payload),  
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