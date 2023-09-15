import React from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

export const getSingleProductDetail = async(id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const result = await response.json();
    return result;
}

const ProductDetails = () => {
    const navigate = useNavigate();
    const {productDetail} = useLoaderData();
    const {id} = useParams();

    const goback = () => {
        navigate('/products'); // path, number
    }
    
  return (
    <div>
        ProductDetails page - {id}
        <h1> Title : <span style={{color: 'red'}}> {productDetail.title} </span></h1>

        <button type='button' onClick={goback}> Go to Products page </button>
    </div>
  )
}

export default ProductDetails