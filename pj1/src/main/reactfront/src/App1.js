import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import SignUp2 from './components/SignUp2';
import UserList from './components/UserList';


//1111
function App() {
  return (
   <BrowserRouter>
   <nav>
     <Link to = {'/'}> Home</Link> 
     <Link to = {'/about'}> about</Link> 
     <Link to = {'/profile'}> Profile</Link> 
     <Link to = {'/signup'}> SignUp</Link> 
     <Link to = {'/signup2'}> SignUp2</Link> 
     <Link to = {'/userList'}> UserList</Link> 
   </nav>
    <Routes>
     
     <Route path='/' element={<Home/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/profile' element={<Profile/>} />
     <Route path='/signup' element={<SignUp/>} />
     <Route path='/signup2' element={<SignUp2/>} />
     <Route path='/userList' element={<UserList/>} />
     
   </Routes>
   </BrowserRouter>
  );
  }

export default App;
