import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar"
import SideBar from './components/SideBar'
import DashBoard from './components/DashBoard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-[100vh] flex flex-col">
        {/* NavBar */}
        <NavBar className="flex-none" />
        {/* SideBar */}
        <div className="flex-1">
          <DashBoard />
        </div>
      </div>

    </>
  )
}

export default App
