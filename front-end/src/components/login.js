import '../App.css';
import { useState } from 'react'
import axios from 'axios'
import Error from './error.js'
import { useNavigate } from 'react-router-dom'

const Login = ({ setAuth }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(username)
        console.log(password)
        axios.post('https://social-cards-app.onrender.com/auth/token/login/', {
            username: username,
            password: password,
        }).then(res => {
            setAuth(res.data.auth_token, username);
            console.log(res.data);
            navigate("/");
        })
    };


    return (
        <>
            <h1 className='loginHeader'>Log In</h1>
            <div className='login-form'>
                <form onFocus={() => setError(null)} onSubmit={handleSubmit}>
                    <div className='usernameForm'>
                        <label> <span>username: </span></label>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            value={username}
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />

                    </div>
                    <div className='passwordForm'>
                        <label><span>password: </span></label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className="submitLoginButton" type='submit'>Submit!</button>
                    </div>
                    <div className="signUp">
                        <p> Not a member yet? </p>
                        <a className="signUpLink" href="/auth/users/">Sign up!</a>
                    </div>


                </form>
            </div>
            {error && <Error message={error.message} />}
        </>
    )
}


export default Login