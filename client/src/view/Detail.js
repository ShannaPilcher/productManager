import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Detail = (props) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res =>  {
                console.log(res.data)
                setProduct(res.data)
            })
    }, [])
    console.log(props)
    return(
        <div>
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default Detail