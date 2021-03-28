import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router'
import axios from 'axios';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
            })
    }, [])
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }
    return (
        <div>
            {products.map((product, idx) => {
                return <p key = {idx}>
                <Link to= {`/products/${product._id}`} > {product.title} </Link>
                <Link to= {`/products/${product._id}/edit`}><button>Edit</button></Link>
                <DeleteButton productId= {product._id} successCallback= {() => removeFromDom(product._id)} />
                </p> 
            })}
        </div>
    )
}

export default ProductList