import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const[menu,setMenu] = useState("home");


  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none'}} to='/'>Home</Link> {menu==="home"?<h/>:<></>}</li>
            <li onClick={()=>{setMenu("about")}}><Link style={{ textDecoration: 'none'}} to='/about'>About</Link>{menu==="about"?<h/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
           <Link to='/login'><button>Login</button></Link> 
        </div>

    </div>
  )
}

export default Navbar