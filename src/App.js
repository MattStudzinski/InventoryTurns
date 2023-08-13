
import { Routes, Route } from 'react-router-dom';

import Results from './Componets/Results';
import './App.css';
import Login from './Componets/Auth/Login';
import AccountState from './Componets/Context/AccountState';




function App() {
  return (
    <>
    <AccountState>
    <Routes>
      <Route path= "/InventorySorter" element={<Results />}/>
      <Route path='/' element={<Login/>}/>
    </Routes>
    </AccountState>
    </>
  );
}

export default App;
