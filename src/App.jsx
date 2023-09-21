import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layout from './components/Layout'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
      <Layout>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/about" element={<About />} />
        <Route path= "/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Layout>
    </>
  )
}

export default App
