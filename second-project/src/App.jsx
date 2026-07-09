import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Catalog from './pages/Catalog'

export default function App() {
  const [path, setPath] = useState('home')

  return (
    <>
      <Header setPath={setPath} />
      {path === 'home' && <Home setPath={setPath} />}
      {path === 'catalog' && <Catalog setPath={setPath} />}
    </>
  )
}
