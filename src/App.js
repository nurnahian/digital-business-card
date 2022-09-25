import React from 'react'
import Main from './component/Main';
import Footer from './component/Footer';
import Profile from './images/Nahian.jpg';
import './App.css';

function App() {
  return (

    <div className='card'>
      <img src={Profile} alt="" className='profile-image' />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
