import { useState } from 'react'
import LeftBar from './components/LeftBar'
import { MainContainer } from './components/LeftBar/MainContainer'
import './scss/style.scss'
function App() {

  return (
    <div className="App">
      <LeftBar></LeftBar>
      <MainContainer></MainContainer>
    </div>
  )
}

export default App
