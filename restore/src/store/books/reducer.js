import {REMOVE_BOOK, GET_BOOKS, SET_BOOK_INFO, CREATE_BOOK} from './constants'
import {AppState} from '../../store'

export const bookReducer = (state=AppState, action) => {
    switch (action.type){
        case REMOVE_BOOK: 
            return {
                ...state, 
                books: state.books.filter( item => item.id !== action.payload.id),
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
        default: 
            return state
    }
}