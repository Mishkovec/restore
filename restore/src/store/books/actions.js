import {ADD_BOOK, REMOVE_BOOK, GET_BOOKS} from './constants'
import {firebaseConfig} from '../../firestore'
import firebase from 'firebase'

const app = firebase.initializeApp(firebaseConfig);

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
        let data;
        app.database().ref().on('value', snap => {
            data = snap.val()
            console.log('allbooks', data)
            // console.log(snap.val())
            // console.log(snap.toJSON())
            dispatch({type: GET_BOOKS, payload: data})
        })
        // dispatch({type: GET_BOOKS, payload: data})
    } 
}
