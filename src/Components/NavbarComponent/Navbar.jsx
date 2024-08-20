import { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
    const [show,setShow]=useState(false);
    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <img src="./Images/logo.svg" alt="Logo" />
                </div>
                <ul className='nav-links'>                   
                        <li>Home</li>
                        <li>About</li>
                        <li>Special Dishes</li>
                        <li>Menu</li>
                        <li>Reviews</li>
                        <li>Order</li>
                        <button className='signInbtn'>Sign In</button>                    
                </ul>
               {show && <ul className='mobile-links'>                   
                        <li>Home</li>
                        <li>About</li>
                        <li>Special Dishes</li>
                        <li>Menu</li>
                        <li>Reviews</li>
                        <li>Order</li>
                        <button className='signInbtn'>Sign In</button>                    
                </ul>}
                <div className='burger-icon'>
                    <img src="./Images/hamburgericon.png" className='hicon' alt="cannot be displayed" onClick={()=>setShow(!show)}/>
                </div>   
            </div>
        </>
    )
}

export default Navbar
