import {
    REMOVE_BOOK, 
    GET_BOOKS, 
    SET_BOOK_INFO, 
    CREATE_BOOK, 
    ADD_TO_CART, 
    REMOVE_FROM_CART, 
    ORDER
} from './constants'
// import {AppState} from '../../store'
import {bookData} from '../../bookData'

const initialState = {
    books: bookData,
    bookInfo: {},
    cartBooks: [],
    totalPrice: 0
}

export const bookReducer = (state=initialState, action) => {
    switch (action.type){
        case REMOVE_BOOK: 
            return {
                ...state, 
                books: state.books.filter( item => item.id !== action.id),
                }
        case GET_BOOKS: 
            return {
                ...state, 
                books: action.payload,
                }
        case SET_BOOK_INFO: 
            return {
                ...state, 
                bookInfo: action.payload,
                }
        case CREATE_BOOK: 
            return {
                ...state, 
                books: [...state.books, action.payload],
                }
        case ADD_TO_CART:
            const book = state.books.find(item => item.id == action.id)
            const index = state.cartBooks.findIndex(item => item.id == action.id)
            const item = state.cartBooks[index]
            let newItem; 
            if (item) {
                newItem = {
                    ...item,
                    amount: item.amount + 1,
                }
            } else {
                newItem = {
                    id: book.id,
                    amount: 1,
                    title: book.title,
                    price: book.price
                };
            }

            if(index < 0) {
                return {
                    ...state, 
                    cartBooks: [...state.cartBooks, newItem], 
                    }
            } else {
                return {
                ...state,
                cartBooks: [
                    ...state.cartBooks.slice(0, index),
                    newItem,
                    ...state.cartBooks.slice(index+1)
                    ]
                }
            }
        case REMOVE_FROM_CART: 
            const r_index = state.cartBooks.findIndex(item => item.id == action.id)
            let r_item = state.cartBooks[r_index]
            if (r_item.amount > 1) {
                return {
                    ...state,
                    cartBooks: [
                        ...state.cartBooks.slice(0, r_index),
                        {
                            ...r_item, 
                            amount: r_item.amount -1
                        },
                        ...state.cartBooks.slice(r_index +1)
                    ],  
                }
            } else {
                return {
                    ...state, 
                    cartBooks: [
                        ...state.cartBooks.slice(0, r_index),
                        ...state.cartBooks.slice(r_index +1)
                    ],  
                }
            }
        case ORDER: 
            return {
                ...state, 
                cartBooks: [], 
                }
        default: 
            return state
    }
}