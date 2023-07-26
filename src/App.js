
import { Routes, Route } from 'react-router-dom';
import Results from './Componets/Results';
import Home from './Componets/Home';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path = "/" element={<Home />}/>
      <Route path = "/Results" element={<Results />}/>
    </Routes>
  );
}

export default App;
