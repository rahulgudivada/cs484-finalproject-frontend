import React, {useContext} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import NavBar from './components/NavBar/NavBar';
import "./GlobalStyles.css";
import { myContext } from './Context';

function App() {
  const userObject = useContext(myContext);
  console.log(userObject);
  return (    
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {
          userObject ? null  : (
            <Route path="/login" element={<LoginPage />} />
          )
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
