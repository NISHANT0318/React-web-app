import React from 'react'

export const Product = ({product}) => {
  return (
    <div className='product'>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <p>Rating: {product.rating.rate}</p>
    </div>
  )
}
