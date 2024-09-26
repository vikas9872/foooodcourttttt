import './FormCss.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/signup', { email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="formCss" onSubmit={handleSubmit}>
            <div className="formMain">
                <div className="sheading">
                    <h1>Log In</h1>
                </div>
                <div className="formActual">
                    <form>
                        <label htmlFor="emailinput">Email</label>
                        <div className="formInput">
                            <input type="email" className="inputbox" id='emailinput' onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <label htmlFor="pass">Password</label>
                        <div className="formInput">
                            <input type="password" className="inputbox" id='pass' onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className="sbtn">
                            <button type="submit" className='lsbtns'><Link to='/dashboard'>Log In</Link></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;
