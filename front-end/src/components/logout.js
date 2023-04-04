import axios from 'axios'



const Logout = ({ token, setAuth }) => {
    // const navigate = useNavigate();

    const handleClick = (event) => {
        axios.post('https://social-cards-app.onrender.com/auth/token/login/',
            {
                headers: { Authorization: `Token ${token}` }
            }).then(res => {
                setAuth("", null);
            })
    };


    return (
        <li><a onClick={handleClick} href="/login">Logout</a></li>
    )
}



export default Logout