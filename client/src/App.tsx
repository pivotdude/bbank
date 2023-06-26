import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Login from './pages/Authorization/Login'
import Registration from './pages/Registration/Registration'
import Profile from './pages/Profile/Profile'
import { getProfile } from './store/features/user/user.actions'
import { useSelector } from 'react-redux'
import { storeI, useAppDispatch } from './store/store'
import BankCards from './pages/BankCards/BankCards'
import Credits from './pages/Credits/Credits'
import Deposits from "./pages/Deposits/Deposits";

function App() {
  const dispatch = useAppDispatch()
  const user = useSelector((state: storeI) => state.user.authUser.success)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(getProfile())
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cards" element={<BankCards />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/deposits" element={<Deposits />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
