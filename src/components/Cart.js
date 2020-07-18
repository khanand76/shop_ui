import React from 'react'

const Cart=({items})=>{
    if(items.length===0)
    return(<div>
        <h1 className="center">Cart</h1>
        <h3>Your cart is empty</h3>
    </div>)
else{   console.log(items)
    let total=0;
    items.forEach(i=>{total+=i.Product_Price})
    return(<div>
        
         <h2 className="center">Cart Items</h2>
         <div className="row">
             <div className="col s12 m7">
                 <div className="card">
                     <div className="card-title">Items in Card</div>
                     <div className="card-content">
                         <ol>
                             {items.map(item=><li key={item.Product_id}>
                                 <ul>
                                     <li>Item: {item.Product_Name}</li>
                                     <li>Category: {item.Product_Category}</li>
                                     <li>Quantity: {item.Product_Qty}</li>
                                     <li>Price: {item.Product_Price}</li>
                                 </ul>
                             </li>)}
                         </ol>
                         <div className="right">Total: {total}</div>
                     </div>
                 </div>
             </div>
         </div>
   
    </div>)
}
}

export default Cart