import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Menu from './components/Menu.jsx'
import Contactus from './components/Contactus.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Home />}></Route>
          <Route path={'/menu'} element={<Menu />}></Route>
          <Route path={'/contact'} element={<Contactus />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
