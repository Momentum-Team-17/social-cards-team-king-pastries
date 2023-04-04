// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'


// const Logout = ({ token, setAuth }) => {
//     const navigate = useNavigate();

//     const handleLogout = (event) => {
//         axios.post('https://social-cards-app.onrender.com/auth/token/logout/',
//             {
//                 headers: { Authorization: `Token ${token}` }
//             }).then(res => {
//                 setAuth("", null);
//                 navigate('/login');
//             })
//     };


//     return (
//         <li><a onClick={handleClick} href="/login">Logout</a></li>
//     )
// }



// export default Logout