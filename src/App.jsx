import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/others/Header'
import Footer from './components/others/Footer'
import MainContent from './components/others/MainContent'
import Details from "./details.json";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true,    // whether animation should happen only once
    });
  }, []);

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
