import React, {FC} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import  {  History, Shop, Supplier, Agent, Report, Overview } from './Pages/Overview';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';


const App: FC = ()=> {
  return (
          <BrowserRouter> 
             <Sidebar/>
          <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/overview" element={<Overview/>} />
          <Route path="/Dashboard/shop" element={<Shop/>} />
          <Route path="/Dashboard/supplier" element={<Supplier/>} />
          <Route path="/agent " element={<Agent/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/report " element={<Report/>} />
            </Routes>
      </BrowserRouter>
     
  )
}

export default App;
