import './App.css';
import Signup from './ui/signup';
import Login from './ui/login';
import Home from './ui/home';
import Admin from './ui/admin';
import AdminPost from './ui/AdminPost';
import AdminLogin from './ui/AdminLogin';
import Display from './ui/Display';
import AboutUs from './ui/AboutUs';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './ui/Contact';
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/admin" element={<AdminLogin/>} />
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/admin/adminpost" element={<AdminPost/>} />
      <Route path="/admin/dashboard" element={<Admin/>} />
      <Route path="/admin/display" element={<Display/>} />
      <Route path="/aboutus" element={<AboutUs/>} />
      <Route path="/Contact" element={<Contact/>} />
  


    </Routes>
  </BrowserRouter>
  );
}

export default App;
