import React from 'react'
import { Product } from './Product'

export const ProductList = ({products}) => {
  return (
    <main className='product-container'>
        {products.map((product)=>(
            <Product key={product.id} product={product}/>
        ))}
    </main>
  )
}
