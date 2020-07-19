import React from 'react'



const Product = ({ product,addItems}) => {
  console.log("inside Product")

  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-title">{product.Product_Name}</div>
          <div className="card-content">
            <ul>
              <li>Category: {product.Product_Category}</li>
              <li>Price: {product.Product_Price}</li>
              <button onClick={()=>addItems(product)}>Add to Cart</button>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Product;