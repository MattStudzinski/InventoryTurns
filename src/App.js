
import { Routes, Route } from 'react-router-dom';

import Results from './Componets/Results';
import './App.css';




function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element={<Results />}/>
    </Routes>
    </>
  );
}

export default App;
