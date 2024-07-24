import React, { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
    const [menu,setMenu]=useState('home')
    return (
        <div className='navbar'>
            <div className="logo"><h1>FoooodCourttttt...</h1></div>
            <ul className='navbarmenu'>
                <li onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
                <li onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
                <li onClick={()=>setMenu("tspecials")} className={menu === "tspecials" ? "active" : ""}>Today's Specials</li>
                <li onClick={()=>setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact Us</li>
            </ul>
            <div className="navbarsignin">
                <button className='navbarsigninbtn'>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar
