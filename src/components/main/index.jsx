import React from 'react';
 
import { FaUserAlt } from 'react-icons/fa'
import Login from '../login';

import Urf from '../../assets/screens/urf.webm'

import './Main.css'

export default function Main() {
  return (
    <>
      <section className="page">
        <Login />
        <div className="img_login_section">
          <video autoPlay loop muted disablePictureInPicture>
            <source src={Urf} type='video/webm' />
          </video>
        </div>
      </section>

      <div className="user-button">
        <FaUserAlt className='icon icon-user' />
      </div>
    </>
  )
}
