import { useLocation } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'


function App() {
  const isOwnerPath = useLocation().pathname.includes('/owner');

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <Home />
      <Footer />
    </div>
  )
}
export default App
