import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/share/Navbar';
import './index.css';
import Home from './component/pages/Home';
import About from './component/pages/about/About';
import Piclure from './component/pages/projects/Piclure';

function App() {

  return (
    <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/piclure" element={<Piclure/>} />
  </Routes>
</BrowserRouter>
  )
}

export default App
