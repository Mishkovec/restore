import React from 'react';
import {CartListItem} from '../../components'
import {useSelector, useDispatch} from 'react-redux'
import {Button} from 'react-bootstrap'
import {ErrorBoundry} from '../../components'
import {useHistory} from 'react-router-dom'
import {order} from '../../store/books/actions'


const CartListContainer = () =>  { 
    const dispatch = useDispatch()
    const books = useSelector( state => state.books.cartBooks)
    const price = useSelector( state => state.books.totalPrice)
    const history = useHistory()

    return (
        <>
            <div className='order'> 
                <b>Общая стоимость: {price} </b>  
                <Button type = 'info' onClick = {() => dispatch(order())}> Заказать </Button>
            </div>
            {   books.length > 0 &&
                books.map(item => {
                    return <ErrorBoundry key={item.id}>
                                <CartListItem key={item.id} book={item}/>
                            </ErrorBoundry>
                })
            }
        </>
    )
}
  
export default CartListContainer;