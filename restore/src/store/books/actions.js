import {ADD_BOOK, REMOVE_BOOK, GET_BOOKS, SET_BOOK_INFO, CREATE_BOOK} from './constants'
import {app} from '../../firestore'

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

 export const setBookInfo = (book_obj) => {
    return { 
         type: SET_BOOK_INFO,
         payload: book_obj
     }
 }

 export const createBook = (book_obj) => {
    return async dispatch => {
        let data;
        app.database().ref().push(book_obj)
        dispatch({type: CREATE_BOOK, payload: book_obj})
    } 
 }

export const getBooks = () => {
    return async dispatch => {
        let data;
        let data1;
        app.database().ref().on('value', snap => {
            data = snap.val()
            console.log('allbooks', data)
            console.log( typeof(data))
            if (typeof(data) == 'object') {
                data1 = data
            } else {
                data1=[]
            }
            dispatch({type: GET_BOOKS, payload: data})
        })
    } 
}
