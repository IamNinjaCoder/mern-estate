import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import React from 'react';
import Header from './components/Header';

export default function App() {
  return (

  
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Profile.jsx' element={<Home/>} />
      <Route path='/SignIn.jsx' element={<SignIn/>} />
      <Route path='/SignUp.jsx' element={<SignUp/>} />
      <Route path='/About.jsx' element={<About/>} />
      <Route path="/Profile.jsx" element={<Profile/>} />
    </Routes>
  </BrowserRouter>
  );
}
