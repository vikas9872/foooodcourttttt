import { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
    const [disp, setDisp] = useState(false);
    const getMenuStyle = (disp) => {
        if (document.documentElement.clientWidth <= 426) {
            return { right: !disp && "-100%" }
        }
    }
    return (
        <>
            <div className="navbar">
                <div className="navbarLeft">
                    <img src="./Images/logo.svg" alt="Logo" />
                </div>
                <div className="navbarCenter" style={getMenuStyle(disp)}>
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Contact Us</li>
                        <button className='signInbth'>Sign In</button>

                    </ul>
                </div>
                <div className="navbarRight">
                    <img src="./Images/hamburgericon.png" className='hicon' alt="cannot be displayed" onClick={() => setDisp((prev) => !prev)} />
                </div>
            </div>
        </>
    )
}

export default Navbar
