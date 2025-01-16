import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar"
import SideBar from './components/SideBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <SideBar/>
    </>
  )
}

export default App
