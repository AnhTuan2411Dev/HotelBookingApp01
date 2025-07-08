import { useLocation, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AllRooms from './pages/AllRooms'
import Footer from './components/Footer'


function App() {
  const isOwnerPath = useLocation().pathname.includes('/owner');

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<AllRooms />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App
