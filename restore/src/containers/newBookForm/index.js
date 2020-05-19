import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import {useDispatch} from 'react-redux'
import {createBook} from '../../store/books/actions'

const FormContainer = () =>  { 
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')
    const [pageNum, setPageNum] = useState('')

    const dispatch = useDispatch()

    const id = uuidv4()

    const save = () => {
        const book = {id, title, author, price, thumbnailUrl: url, longDescription: description, pageCount: pageNum}
        dispatch(createBook(book))
        console.log(book)
    }

    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Название:</Form.Label>
                    <Form.Control 
                        type="text"  
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Автор:</Form.Label>
                    <Form.Control 
                        type="text"  
                        value={author}
                        onChange={(e)=>setAuthor(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Количество страниц:</Form.Label>
                    <Form.Control 
                        type="number"  
                        value={pageNum}
                        onChange={(e)=>setPageNum(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Ссылка на картинку:</Form.Label>
                    <Form.Control 
                        type="text"  
                        value={url}
                        onChange={(e)=>setUrl(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Цена:</Form.Label>
                    <Form.Control 
                        type="number"  
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Описание:</Form.Label>
                    <Form.Control 
                        as="textarea" rows="3"   
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />
                </Form.Group>            
            </Form>
            <Button type='primary' onClick={()=> save()}>Создать книгу</Button>
        </>
    )
}
  
export default FormContainer;