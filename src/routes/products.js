import React from 'react'
import { getProductList } from '../components/Products';
import { getSingleProductDetail } from '../components/ProductDetails';
import { redirect } from 'react-router-dom';

export const productLoader = async () => {
  const products = await getProductList();
  console.log(products)
  if(!products){
    redirect('/');
  }
  
  return {products}
}

export const productDetailLoader = async({params}) => {
  console.log(params);
  const detail = await getSingleProductDetail(params.id);
  console.log(detail);
  return {productDetail: detail}
}