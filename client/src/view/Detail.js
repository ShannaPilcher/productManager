import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Detail = (props) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res =>  {
                console.log(res.data)
                setProduct(res.data)
            })
    }, [])
    const deleteProduct = productId => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => console.log(res))
    }
    return(
        <div>
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/products/`} ><button onClick = {(e) => {deleteProduct(product._id)}}>Delete</button></Link>
        </div>
    )
}

export default Detail