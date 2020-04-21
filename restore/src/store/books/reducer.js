import {ADD_BOOK, REMOVE_BOOK} from './constants'

const initialState = {
    books: [],
    amount: 0
}

export const bookreducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_BOOK: 
            return {
                ...state, 
                books: [...state.book, action.payload], 
                amount: state.amount+1
                }
        case REMOVE_BOOK: 
            return {
                ...state, 
                books: state.books.filter( item => item.id !== action.payload.id),
                amount: state.amount-1
                }
        default: 
            return state
    }
}