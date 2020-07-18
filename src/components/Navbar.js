import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

  

    return (
        <div>
            <nav className="nav-wrapper blue darken-3">
                <div className="container">
                    <a className="brand-logo">E -shop</a>
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                       <li><Link to="/cart">Cart</Link></li>
                    </ul>



                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar
