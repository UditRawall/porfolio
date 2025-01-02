import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/share/Navbar';
import './index.css';
import Home from './component/pages/Home';
import About from './component/pages/about/About';

function App() {

  return (
    <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<div>Contact Page</div>} />
  </Routes>
</BrowserRouter>
  )
}

export default App
