import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import SignUp2 from './components/SignUp2';
import UserList from './components/UserList';
import Header from './components/Header'
import ChatRoom from './components/ChatRoom';
import Registry from './components/Registry';



function App() {
  return (
   <BrowserRouter>
   <Header/>
    <Routes>
     
     <Route path='/' element={<Home/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/profile' element={<Profile/>} />
     <Route path='/signup' element={<SignUp/>} />
     <Route path='/signup2' element={<SignUp2/>} />
     <Route path='/userList' element={<UserList/>} />
     <Route path='/chatroom' element={<ChatRoom/>} />
     <Route path='/registry' element={<Registry/>}/>
     
   </Routes>
   </BrowserRouter>
  );
  }

export default App;
