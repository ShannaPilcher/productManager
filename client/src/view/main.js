import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Router from '@reach/router'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList'

const Main = () => {
    return(
        <div>
            <ProductForm />
            <hr/>
            <ProductList />
        </div>
    )
}

export default Main