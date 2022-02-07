import React from 'react';
 
import { FaUserAlt } from 'react-icons/fa'
import Login from '../login';

import ScreenOne from '../../assets/screens/stars-guardians.webm'

import './Main.css'

export default function Main() {
  return (
    <>
      <section className="page">
        <Login />
        <div className="img_login_section">
          <video autoPlay loop disablePictureInPicture >
            <source src={ScreenOne} type='video/webm' />
          </video>
        </div>
      </section>

      <div className="user-button">
        <FaUserAlt className='icon icon-user' />
      </div>
    </>
  )
}