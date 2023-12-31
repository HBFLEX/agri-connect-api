import React from 'react'

const Product = (props) => {

    const product_link = `/marketplace/product/${props.product.id}`
    let short_description = ''
    
    if(new String(props.product.description).length <= 50){
        short_description = props.product.description
    }else{
        short_description = new String(props.product.description).slice(0, 50).concat('...')
    }

  return (
    <div className='bg-white mb-3 p-3 rounded' height={30}>
        {/* top part */}
        <div className='top-part'>
            <img className='product-user-profile' src={props.product.User?.profilePic} height={50} width={50} />
            <div className='product-user-info'>
                <p className='product-user-name mb-0'>{`${props.product.User?.firstName} ${props.product.User?.lastName}`}</p>
                <small>{new Date(props.product.createdAt).toDateString()}</small>
            </div>      
        </div>
        {/* product content part */}
        <p className='mt-3'>
            {
                props.page === 'marketplace'
                ? short_description
                : props.product.description
            }
        </p>
        {/* product image */}
        <img src={props.product.productImage} width='100%' className='rounded' />
        <p className='product-name text-muted mt-3'>{props.product.name}</p>
        <p>MWK { props.product.price }</p>
        {
            props.page === 'productDetail' 
            ? <a href={product_link} className='btn btn-success mx-auto d-block mt-3'>Add to Cart</a>
            : <a href={product_link} className='btn btn-warning mx-auto d-block mt-3'>Purchase Product</a>

        }
    </div>
  )
}

export default Product