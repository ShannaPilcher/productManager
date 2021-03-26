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
    return (
        <div>
            {products.map((product, idx) => {
                return <Link to= {`/products/${product._id}`} > <p key={idx}>{product.title}</p> </Link>
            })}
        </div>
    )
}

export default ProductList