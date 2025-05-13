import React from 'react'

const ProductList = ({products}) => {
  return (
    <>
        {products.map((product) => (
            <div>
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div>
        ))}
    </>
  )
}

export default ProductList