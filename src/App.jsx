import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react';
import './App.css'
import Navbar from '../src/component/Navbar.jsx'
import Footer from '../src/component/Footer.jsx'
import Opanform from '../src/component/Opanform.jsx'
import Home from '../src/Pages/Home.jsx'
import Course from '../src/Pages/Course.jsx'
import Showcase from '../src/Pages/Showcase.jsx'
import CourseDetail from './Pages/CourseDetail.jsx';
import About from '../src/Pages/About.jsx'
import Contact from '../src/Pages/Contact.jsx'
import Blog from '../src/Pages/Blog.jsx'
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
        <Route path='/About' element={<About />} />
        <Route path='/Showcase' element={<Showcase />} />
        <Route path='/Course' element={<Course />} />
        <Route path='/Course/:id' element={<CourseDetail />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Blog' element={<Blog />} />
      </Routes>
      <Footer />
      <Opanform />

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
