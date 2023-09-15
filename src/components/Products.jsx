import React, { useEffect } from 'react'
import { Link, Outlet, useLoaderData } from 'react-router-dom';

export const getProductList = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await res.json();
    return result;
}

const Products = () => {
    const {products} = useLoaderData();
  return (
    <div>
        Products page
        {products.map(item => {
            return <Link to={`${item.id}`}> {item.id} </Link>
        })
        }
    </div>
  )
}

export default Products