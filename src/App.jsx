import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'
import Details from "./details.json";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <Header navlinks={Details} />

        <MainContent details={Details} />

        <Footer />
      </div>
    </>
  )
}

export default App
