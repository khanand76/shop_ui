import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'
import Order from './components/Order'
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios'

const App = () => {
  // const [products, setProducts] = useState([{
  //   Product_id: 1,
  //   Product_Name: "Tea",
  //   Product_Category: "Beverages",
  //   Product_Qty: 1,
  //   Product_Price: 100
  // },
  // {
  //   Product_id: 2,
  //   Product_Name: "Oranges",
  //   Product_Category: "Fruits",
  //   Product_Qty: 3,
  //   Product_Price: 87.5
  // }
  // ])

  const [products, setProducts] = useState([])

  const [cartItems, setCartItems] = useState([]);

  // const [order,setOrder]=useState([]);

  const [notificationMessage, setNotificationMessage] = useState(null)


  const hook =()=>{
    console.log('effect')
    axios.get('/api/products')
    .then(response => {
      console.log('promise fulfiled')
      setProducts(response.data)
    })

  } 

    useEffect(hook,[]);

  // const placeOrder=()=>{

  //   const newOrder={
  //     orderId:Math.floor(Math.random()*1000),
      
  //   }
  // }

  const addcartItems = (item) => {
    if (cartItems.includes(item))
    {console.log("already in cart")
    setNotificationMessage(`${item.Product_Name} already in cart`)
    setTimeout(()=>setNotificationMessage(null),5000)

    }  
    else {
      console.log(`Adding ${item.Product_Name} to cart`)
      setCartItems(cartItems.concat(item))
      setNotificationMessage(`${item.Product_Name} adedd to cart`)
      setTimeout(()=>setNotificationMessage(null),5000)
    }

  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      
        <Route exact path="/">
      
          <Products products={products} addcartItems={addcartItems} message={notificationMessage}  />
          
        </Route>


        {/* <h2 className="center">Cart Items</h2>
    { cartItems.map(product=><p key={product.Product_id}>Item: {product.Product_id}</p>
    )
  } */}

        {/* <Cart items={cartItems} /> */}
        <Route path="/cart">
          <Cart items={cartItems} />
         
        </Route>

        <Route path="/order">
          <Order items={cartItems} />
        </Route>

      </div>
    </BrowserRouter>)
}



export default App;
