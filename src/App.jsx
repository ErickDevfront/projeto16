import { useState } from 'react'
import './App.css'
import MainDota2 from './Main/maindota2/maindota2'
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainDota2/>
      <Header/>
      <Footer/> 
    </>
  )
}

export default App
