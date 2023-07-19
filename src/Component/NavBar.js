import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navnbar'>
            <div className='left'>
                <h3><NavLink to="/">Shopping Cart</NavLink></h3>
            </div>

            <div className='right'>
                <NavLink to="/home">Home Page</NavLink>
                <NavLink to="/cart">Cart Page</NavLink>
            </div>
            {/* <div className='left'>
                <h3><a href="/">Shopping Cart</a></h3>
            </div>

            <div className='right'>
                <a href="/home">Home Page</a>
                <a href="/cart">Cart Page</a>
            </div>
            navabr */}
        </div>
    )
}

export default NavBar