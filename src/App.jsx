import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react';
import './App.css'
import Navbar from '../src/component/Navbar.jsx'
import Footer from '../src/component/Footer.jsx'
import Home from '../src/Pages/Home.jsx'
import Books from '../src/Pages/Books.jsx'
import BookDetails from './component/BookDetails.jsx';


import { Routes, Route, useLocation } from 'react-router-dom'

function App() {

  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname])

  const [dark, setDark] = useState(false);

  function togleIcon() {
    setDark(!dark)
  }

  return (

    <div className={dark ? "dark" : ""}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Books' element={<Books />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
      <Footer />


      {/* dark mode */}
      <button
        onClick={togleIcon}
        className='fixed top-6 right-4 md:right-12 z-20 text-blue-500 dark:text-orange-500'
      >
        {dark ? <Sun /> : <Moon />}
      </button>
    </div>


  )
}

export default App
