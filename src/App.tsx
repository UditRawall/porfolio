import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/share/Navbar';
import './index.css';
import Home from './component/pages/Home';
import About from './component/pages/about/About';
import Piclure from './component/pages/projects/Piclure';
import { ProjectEikomp } from './component/pages/projects/ProjectEikomp';
import ProjectPage from './component/pages/ProjectPage';

function App() {

  return (
    <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<About/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/piclure" element={<Piclure/>} />
    <Route path="/eikomp" element={<ProjectEikomp/>} />
    <Route path="/projects" element={<ProjectPage/>} />
  </Routes>
</BrowserRouter>
  )
}

export default App
