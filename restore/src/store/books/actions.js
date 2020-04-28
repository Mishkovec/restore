import {ADD_BOOK, REMOVE_BOOK, GET_BOOKS} from './constants'

export const addBook = (book_obj) => {
   return { 
        type: ADD_BOOK,
        payload: book_obj
    }
}

export const removeBook = (book_obj) => {
    return { 
         type: REMOVE_BOOK,
         payload: book_obj
     }
 }

export const getBooks = () => {
    return async dispatch => {
        const res = await fetch('https://restore-ff535.firebaseio.com/restore-ff535.json', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            mode: "cors"
        })
        const data = await res.json()
        console.log('books', data)
        dispatch({type: GET_BOOKS, payload: data})
    } 
}
