import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router'
import axios from 'axios';

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
    const deleteProduct = productId => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {removeFromDom(productId)})
    }
    return (
        <div>
            {products.map((product, idx) => {
                return <p key = {idx}>
                <Link to= {`/products/${product._id}`} > {product.title} </Link>
                <Link to= {`/products/${product._id}/edit`}><button>Edit</button></Link>
                <button onClick={(e)=> {deleteProduct(product._id)}} >Delete</button>
                </p> 
            })}
        </div>
    )
}

export default ProductList