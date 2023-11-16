import React from 'react'

const Product = ({ product }) => {
  return (
    <div className='col-md-6'>
        <div className='bg-white mb-3 p-3 rounded' height={30}>
            {/* top part */}
            <div className='top-part'>
                <img className='product-user-profile' src={product.User.profilePic} height={50} width={50} />
                <div className='product-user-info'>
                    <p className='product-user-name mb-0'>{product.User.firstName + ' ' + product.User.lastName}</p>
                    <small>{new Date(product.createdAt).toDateString()}</small>
                </div>      
            </div>
            {/* product content part */}
            <p className='mt-3'>
                {product.description}
            </p>
            {/* product image */}
            <img src={product.productImage} width='100%' className='rounded' />
            <p className='product-name text-muted mt-3'>{product.name}</p>
            <button className='btn btn-outline-warning mx-auto d-block mt-3'>View More</button>
        </div>
    </div>
  )
}

export default Product