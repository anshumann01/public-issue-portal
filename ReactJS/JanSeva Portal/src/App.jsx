import React from 'react'
import LoginPage from './Components/LoginPage'
import UserDashboard from './Components/UserDashboard';
import AdminDashboard from './Components/AdminDashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/citizen" element={<UserDashboard/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App