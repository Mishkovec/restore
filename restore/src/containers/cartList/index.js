import React from 'react';
import {CartListItem} from '../../components'

const CartListContainer = () =>  { 

    const book = {
        title: 'My Book',
        author: 'I',
        amount: 1
    }

    return (
        <div>
            <CartListItem book={book}/>
        </div>
    )
}
  
export default CartListContainer;