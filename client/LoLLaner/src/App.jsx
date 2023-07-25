import { useState } from 'react'
import './App.css'
import {Outlet} from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='z-50 relative'>
      <Navbar/>
      </div>

      <body>
        <main>
        <Outlet/>
        </main>
        <footer></footer>
      </body>
    </>
  )
}

export default App
