import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import axios from 'axios'
import "../styles/navbar.css"
import { useNavigate } from 'react-router-dom'




export default function Navbar({ token, setAuth }) {
    const [expanded, setExpanded] = useState(false)
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('logouttime')
        axios.post('https://social-cards-app.onrender.com/auth/token/logout/',
            {},
            {
                headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' }

            }).then(() => {
                setAuth("", null);
                navigate('/');
                console.log('logout is happening')
            })
    };

    return (
        <header className='header'>
            <div>
                <h3>Social Cards</h3>
            </div>
            <nav className='navbar'>
                <div className='hamburger'>
                    {expanded && <div>
                        <li><a href="/">Home</a></li>
                        <li><a href="/profile">My Profile</a></li>
                        <li><a href="/new">Make a new card</a></li>
                        <li onClick={handleLogout}>Logout</li>
                    </div>}
                    <button className='hamburger' onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
                        <FaBars />
                    </button>
                </div>
            </nav>
        </header >
    );
}
