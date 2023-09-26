
import { Routes, Route } from 'react-router-dom';

import Results from './Componets/Results';
import './App.css';
import Protected from './Componets/Auth/Protected'
import Login from './Componets/Auth/Login';
import AccountState from './Componets/Context/AccountState';
import SignUp from './Componets/Auth/SignUp';




function App() {
  return (
    <>
    <AccountState>
    <Routes>
      <Route element = {<Protected/>}>
      <Route path= "/InventorySorter" element={<Results />}/>
      <Route path='/AddUser' element={<SignUp />}/>
      </Route>
      <Route path= '/' element={<Login/>}/>
    </Routes>
    </AccountState>
    </>
  );
}

export default App;
