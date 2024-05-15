import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CoursePage from './pages/CoursePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import router from './Router/Router'
import { Outlet, Routes, Router, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        {/* Render routes defined in the router configuration */}
        {router.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  </Router>
  )
}

export default App
