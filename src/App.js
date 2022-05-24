import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Music from './pages/music';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/music' element={<Music/>} />

      </Routes>
    </div>
  );
}

export default App;
