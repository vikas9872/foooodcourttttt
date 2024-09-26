import { useState } from 'react'
import { Link } from 'react-router-dom';
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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/spacialdishes">Special Dishes</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reviews">Reviews</Link></li>
                        <button className='signInbtn'> <Link to="/signin">Sign In</Link></button>                    
                </ul>
               {show && <ul className='mobile-links'>                   
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/spacialdishes">Special Dishes</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reviews">Reviews</Link></li>
                        <button className='signInbtn'><Link to="/signin">Sign In</Link></button>                    
                </ul>}
                <div className='burger-icon'>
                    <img src="./Images/hamburgericon.png" className='hicon' alt="cannot be displayed" onClick={()=>setShow(!show)}/>
                </div>   
            </div>
        </>
    )
}

export default Navbar
