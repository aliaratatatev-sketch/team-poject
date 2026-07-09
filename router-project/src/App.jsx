import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)
  const [path, setPath] = useState('home')

  function changePath () {
    if (path == "home"){
    setPath("about")
    }else if (path == "about"){
       setPath("home")
    }
  }

  return (
    <>
    <button onClick={changePath} >home</button>
    <button onClick={changePath} >about</button>
    {path=="home" &&  <Home/>}
    {path=="about" && <About/>}
    </>
  )
}

export default App
