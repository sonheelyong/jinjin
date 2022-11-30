import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import About from './pages/About';
import Hellow from './pages/Hellow';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';


function App() {
  return (
   <BrowserRouter>
    <nav>
       <Link to ={'/'}>Home </Link>
       <Link to ={'/about'}>About </Link>
       <Link to ={'/profile'}>Profile </Link>
       <Link to ={'/signup'}>회원가입 </Link>
       <Link to ={'/hellow'}>헬로 </Link>

    </nav>
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/about' element={<About />} />
     <Route path='/profile' element={<Profile />} />
     <Route path='/signup' element={<SignUp />} />
     <Route path='/hellow' element={<Hellow />} />
       

     
    </Routes>
   </BrowserRouter>
  );
}

export default App;
