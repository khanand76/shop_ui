import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
  const [products] = useState([{
    Product_id: 1,
    Product_Name: "Tea",
    Product_Category: "Beverages",
    Product_Qty: 1,
    Product_Price: 100
  },
  {
    Product_id: 2,
    Product_Name: "Oranges",
    Product_Category: "Fruits",
    Product_Qty: 3,
    Product_Price: 87.5
  }
  ])

  const [cartItems, setCartItems] = useState([]);

  const addcartItems = (item) => {
    if(cartItems.includes(item))
      console.log("already in cart")
      else{
        console.log(`Adding ${item} to cart`)
        setCartItems(cartItems.concat(item))
      }
    
  }

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      
      <Route exact path="/">
      <Products products={products} addcartItems={addcartItems}/>
      </Route>
     

      {/* <h2 className="center">Cart Items</h2>
    { cartItems.map(product=><p key={product.Product_id}>Item: {product.Product_id}</p>
    )
  } */}

      {/* <Cart items={cartItems} /> */}
      <Route path="/cart">
        <Cart items={cartItems}/>
      </Route>
      
    </div>
    </BrowserRouter>)
}

export default App;
