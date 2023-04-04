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
            // headers: { Authorization: `Token ${token}` }
        }).then(res => {
            // const token = res.data.auth_token;
            setAuth(res.data.auth_token, username);
            console.log(res.data);
            navigate('/');
        })
    };


    return (
        <>
            <h1>Log In</h1>
            <div className='login-form'> 
            <form onFocus={() => setError(null)} onSubmit={handleSubmit}>
                <div>
                    <label> <span>username</span></label>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />

                </div>
                <div>
                    <label><span>password</span></label>
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
                    <button type='submit'>Submit!</button>
                </div>
            </form>
            </div>
            {error && <Error message={error.message} />}
        </>
    )
}


export default Login