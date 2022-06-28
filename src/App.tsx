import React, {FC} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import  { Overview, History,Configurations, Order, Revenue, Users } from './Pages/Overview';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';


const App: FC = ()=> {
  return (
          <BrowserRouter> 
             <Sidebar/>
          <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/overview" element={<Overview/>} />
          <Route path="/overview/users" element={<Users/>} />
          <Route path="/overview/revenue" element={<Revenue/>} />
          <Route path="/order " element={<Order/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/configurations " element={<Configurations/>} />
            </Routes>
      </BrowserRouter>
     
  )
}

export default App;
