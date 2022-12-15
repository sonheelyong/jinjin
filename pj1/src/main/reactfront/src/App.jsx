import React, {useEffect, useState} from 'react'
import ChatRoom from './components/ChatRoom'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';
import SignUp from './components/login/SignUp';
import UserList from './components/UserList';
import GoogleLoginButton from './components/login/GoogleLoginButton'
import AfterProfile  from './components/login/AfterProfile';
import Board from './components/board/Board';

const App = () => {


  return (
    <>
  
    <BrowserRouter>
      <Routes>
      
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/userList' element={<UserList/>} />
      <Route path='/googleLoginButton' element={<GoogleLoginButton/>} />
      
      <Route path='/afterProfile' element={<AfterProfile/>} />
      <Route path='/board' element={<Board/>}/>
      

      
    </Routes>
   </BrowserRouter>
    
    </>
    

  );
}
//1111
export default App;