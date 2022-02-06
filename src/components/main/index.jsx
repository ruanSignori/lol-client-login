import React from 'react';
 
import { FaUserAlt } from 'react-icons/fa'
import Login from '../login';

import './Main.css'

export default function Main() {
  return (
    <>
      <section className="page">
        <Login />
        <div className="img_login_section"></div>
      </section>

      <div className="user-button">
        <FaUserAlt className='icon icon-user' />
      </div>
    </>
  )
}