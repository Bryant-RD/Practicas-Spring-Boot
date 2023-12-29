import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Login} from './Login/index'
import { HomeClient } from './ClientView/HomeClient';
import { HomeAdmin } from './AdminView/HomeAdmin';
import UserForm from './AdminView/UserForm';
import { UserList } from './AdminView/UserList';
import EmployeeDashboard from './EmployeerView/EmployeeDashBoard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/HomeCliente' element={ <HomeClient />} />
        <Route path='/homeAdmin' element={ <HomeAdmin /> } />
        <Route path='/userForm' element={ <UserForm /> } />
        <Route path='/userList' element={ <UserList /> } />
        <Route path='/EmployeeDashboard' element={ <EmployeeDashboard /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
