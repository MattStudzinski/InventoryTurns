
import { Routes, Route } from 'react-router-dom';

import Results from './Componets/Results';
import './App.css';
import Login from './Componets/Auth/Login';
import AccountState from './Componets/Context/AccountState';
import SignUp from './Componets/Auth/SignUp';




function App() {
  return (
    <>
    <AccountState>
    <Routes>
      <Route path= "/InventorySorter" element={<Results />}/>
      <Route path= '/' element={<Login/>}/>
      <Route path='/AddUser' element={<SignUp />}/>
    </Routes>
    </AccountState>
    </>
  );
}

export default App;
