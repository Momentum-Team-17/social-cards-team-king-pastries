import './App.css';
import React from 'react'
import NewCard from './components/new-card.js'
import Cards from './components/cards.js'
import CardList from './components/cardList.js'
import Profile from './components/profile.js'
import Navbar from './components/navbar.js'
import Login from './components/login.js'
import Registration from './components/newuser.js'
import useLocalStorageState from 'use-local-storage-state'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ViewOtherProfile from './components/view-other-profile';
import axios from 'axios';
import ErrorPage from './components/404';



function App() {
  const [token, setToken] = useLocalStorageState('loginToken', '')
  const [username, setUsername] = useLocalStorageState('userUsername', '')
  const navigate = useNavigate();


  const setAuth = (token, username) => {
    setToken(token)
    setUsername(username)
  }

  const handleLogout = () => {
    axios.post('https://social-cards-app.onrender.com/auth/token/logout/',
      {},
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    ).then(() => {
      setAuth('', null)
      navigate('/')
    })
  }

  return (
    <>

      {token ? (
        <>
          <Navbar
            token={token}
            username={username}
            handleLogout={handleLogout}
          />
          <Routes>
            <Route path='/Profile' element={<Profile username={username} token={token} />} />
            <Route path='/' element={<CardList hi={true} username={username} token={token} />} />
            <Route path='/profile' element={<Profile username={username} token={token} />} />
            <Route path='/new' element={<NewCard username={username} token={token} />} />
            <Route path='/profile' element={<Profile username={username} token={token} />} />
            <Route path='/cardview/:cardNumber' element={<Cards username={username} token={token} />} />
            <Route path='/viewotherprofile/:currentProfile' element={<ViewOtherProfile username={username} token={token} />} />
            <Route path='/404page' element={<ErrorPage />} />
          </Routes>
        </>
      ) : (
        <div>
          <Routes>
            <Route path='/' element={token ? <CardList username={username} token={token} /> : <Login setAuth={setAuth} />} />
          </Routes>
        </div>)
      }</>
  );
}

export default App;
