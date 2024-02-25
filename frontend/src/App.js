import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navibar } from './components/Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BloodAvailability from './components/BloodAvailability';
import BloodBankAvailability from './components/BloodBankAvailability';

import DonorLogin from './components/donor/DonorLogin';
import DonorRegister from './components/donor/DonorRegister';
import DonorAppointment from './components/donor/DonorAppointment';
import DonorHome from './components/donor/DonorHome';

import BloodStock from './components/bank/BloodStock';
import CampSchedule from './components/bank/CampSchedule';
import CampRegister from './components/bank/CampRegister';
import Login from './components/bank/Login';
import Register from './components/bank/Register';
import BankHome from './components/bank/BankHome';

import AdminHome from './components/admin/AdminHome';
import { BrowserRouter } from 'react-router-dom';
import { FAQ } from './components/FAQ';
import React, { Component } from 'react'

import {BasicTable} from './components/admin/table/BasicTable'
import {SortingTable} from './components/admin/table/SortingTable'
import {FilteringTable} from './components/admin/table/FilteringTable'
import {PaginationTable} from './components/admin/table/PaginationTable'
import {RowSelection} from './components/admin/table/RowSelection'
import { RowSel } from './components/admin/table/RowSel';
import AdminLogin from './components/admin/AdminLogin';
import ToastDemo from './components/ToastDemo';
import StockUpdate from './components/bank/StockUpdate';
class App extends Component {
  


  render() {
    return (
      <>
      <Navibar/>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/faq' element={<FAQ/>}></Route>
      

        <Route path='/about' element={<About/>}></Route>
        <Route path='/bloodAvailablitity' element={<BloodAvailability />}></Route>
        <Route path='/bloodBankAvailablitity' element={<BloodBankAvailability/>}></Route>
        
        <Route path='/donor/login' element={<DonorLogin/>}></Route>
        <Route path='/donor/register' element={<DonorRegister/>}></Route>
        <Route path='/donor/donorAppointment' element={<DonorAppointment/>}></Route>

        <Route path='/bank/campSchedule' element={<CampSchedule/>}></Route> 
        <Route path='/bank/campRegister' element={<CampRegister/>}></Route> 
        <Route path='/bank/bankHome' element={<BankHome/>}></Route> 
        <Route path='/bank/bloodStock' element={<BloodStock/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/bank/register' element={<Register/>}></Route>

        <Route path='/admin/basictable' element={<BasicTable/>}></Route>
        <Route path='/admin/sortingtable' element={<SortingTable/>}></Route>
        <Route path='/admin/filteringtable' element={<FilteringTable/>}></Route>
        <Route path='/admin/paginationtable' element={<PaginationTable/>}></Route>
        <Route path='/admin/rowselection' element={<RowSelection/>}></Route>
        <Route path='/admin/rowsel' element={<RowSel/>}></Route>

        <Route path='/admin/adminLogin' element={<AdminLogin/>}></Route>
        
          <Route path='/admin/adminHome' element={<AdminHome/>}></Route>
          <Route path='/donor/DonorHome' element={<DonorHome/>}></Route>

        

        <Route path='/toastDemo' element={<ToastDemo info="Hello... KING_SH@RK"/>}></Route>
        <Route path='/admin/adminHome' element={<AdminHome/>}></Route>

        <Route path='/bank/updateStock' element={<StockUpdate/>}></Route>
      </Routes>
      </BrowserRouter>
     
      </>
    )
  }
}

export default App
