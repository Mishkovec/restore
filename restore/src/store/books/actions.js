import {REMOVE_BOOK, GET_BOOKS, SET_BOOK_INFO, CREATE_BOOK , ADD_TO_CART, REMOVE_FROM_CART, ORDER} from './constants'
import {app} from '../../firestore'
import {bookData} from '../../bookData'


export const removeBook = (id) => {
    return { 
         type: REMOVE_BOOK,
         id
     }
 }

 export const setBookInfo = (book_obj) => {
    return { 
         type: SET_BOOK_INFO,
         payload: book_obj
     }
 }

 export const createBook = (book_obj) => {
    // return async dispatch => {
    //     let data;
    //     app.database().ref().push(book_obj)
    //     dispatch({type: CREATE_BOOK, payload: book_obj})
    // } 
    return { 
        type: CREATE_BOOK,
        payload: book_obj
    }
 }

export const getBooks = () => {
    // return async dispatch => {
    //     let data;
    //     let data1;
    //     app.database().ref().on('value', snap => {
    //         data = snap.val()
    //         console.log('allbooks', data)
    //         console.log( typeof(data))
    //         if (typeof(data) == 'object') {
    //             data1 = data
    //         } else {
    //             data1=[]
    //         }
    //         dispatch({type: GET_BOOKS, payload: data})
    //     })
    // } 
    return { 
        type: GET_BOOKS,
        payload: bookData
    }
}

export const addToCart = (id) => {
    return { 
        type: ADD_TO_CART,
        id
    }
}

export const removeFromCart = (id) => {
    return { 
        type: REMOVE_FROM_CART,
        id
    }
}

export const order = () => {
    return { 
        type: ORDER,
    }
}