import React from 'react'
import Product from './Product'

const Products=({products,addcartItems})=>{

    return(<div>
        <h1 className="center">All Our Products </h1>
         {products.map(product => {
        console.log(product.Product_Name)
        return (<Product product={product} key={product.Product_id} addItems={addcartItems} />)


      })}
    </div>)

}

export default Products