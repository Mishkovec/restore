import React from 'react';
import {CartListItem} from '../../components'
import {useSelector} from 'react-redux'

const CartListContainer = () =>  { 
    const books = useSelector( state => state.books.cartBooks)

    return (
        <>
            {   books.length > 0 &&
                books.map(item => {
                    return <CartListItem key={item.id} book={item}/>
                })
            }
        </>
    )
}
  
export default CartListContainer;