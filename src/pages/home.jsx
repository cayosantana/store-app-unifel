import React from 'react';
import Login from '../components/login';
import imageHome from './image/tela-home-eco.png'
import './home.css'


function Home() {
  

  return (
    <>
      <div className='container-home'>
        <div className='container-home-img'>
          <img src={imageHome} alt="" />
        </div>
        <div className='container-home-login'>
          <Login />
        </div>
      </div>
    </>
  )
}

export default Home
