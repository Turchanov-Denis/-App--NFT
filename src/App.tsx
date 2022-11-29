import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import LeftBar from './components/LeftBar'
import './scss/style.scss'
import { useNavigate } from "react-router-dom";
import React from 'react'
function App() {
  const navigate = useNavigate();
  React.useEffect(() => navigate("/home"), [])
  return (
    <div className="App">
      <LeftBar></LeftBar>
      <Outlet />
    </div>
  )
}
export default App
