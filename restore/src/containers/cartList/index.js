import React from 'react';
import {CartListItem} from '../../components'
import {useSelector} from 'react-redux'

const CartListContainer = () =>  { 
    const books = useSelector( state => state.cart.cartBooks)

    return (
        <div>
            {   books.length > 0 &&
                books.map( item => {
                    return <CartListItem book={item}/>
                })
            }
        </div>
    )
}
  
export default CartListContainer;