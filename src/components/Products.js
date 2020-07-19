import React from 'react'
import Product from './Product'
import Notification from './Notification'

const Products=({products,addcartItems,message})=>{

    return(<div>
        <h1 className="center">All Our Products </h1>
        <Notification message={message}/>
         {products.map(product => {
        console.log(product.Product_Name)
        return (<Product product={product} key={product._id} addItems={addcartItems} message={message} />)
        


      })}
     
    </div>)

}

export default Products