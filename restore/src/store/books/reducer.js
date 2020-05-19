import {ADD_BOOK, REMOVE_BOOK, GET_BOOKS, SET_BOOK_INFO, CREATE_BOOK} from './constants'

const initialState = {
    books: [],
    bookInfo: {}
}

export const bookReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_BOOK: 
            return {
                ...state, 
                books: [...state.book, action.payload], 
                }
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