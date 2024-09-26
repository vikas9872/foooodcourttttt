import { useState } from 'react';
import './FormCss.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/signup', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="formCss">
            <div className="formMain">
                <div className="sheading">
                    <h1>Sign Up</h1>
                </div>
                <div className="formActual" data-aos="zoom-out-up">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="unameinput">Username</label>
                        <div className="formInput">
                            <input type="name" className="inputbox" id='unameinput' onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <label htmlFor="emailinput">Email address</label>
                        <div className="formInput">
                            <input type="email" className="inputbox" id='emailinput' onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <label htmlFor="pass">Password</label>
                        <div className="formInput">
                            <input type="password" className="inputbox" id='pass' onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className="sbtn">
                            <button type="submit" className='lsbtns'>SignIn</button>
                        </div>
                    </form>
                    <p className="text-center">Already have account?</p>
                    <Link to="/login">
                        <button type="button" className='lsbtns'>Log In</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
