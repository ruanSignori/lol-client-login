import React, { useState } from 'react';

import { FaCheck } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { RiArrowRightLine } from 'react-icons/ri';

import './Login.css';

export default function Login() {

  const [dataUser, setDataUser] = useState({
    username: '',
    password: '',
    save_login: false
  });

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;

    setDataUser({
      ...dataUser, [name]: checked || value
    })
  }

  console.log(dataUser)

  return (
    <div className='login_section' >
      <div>
        <img 
          width='150'
          src='https://blog.aevo.com.br/wp-content/uploads/2020/09/riot-games-inovacao-radical.png'
          alt='Logo Riot Games'
        />
      </div>
        <h2>Fazer login</h2>
        <div>
          <form>
            <div className='input_field'>
              <input type='text' 
                onChange={(e) => handleInputChange(e)} 
                name='username' 
                id='username' 
                required
                value={dataUser.username}
              />
              <label htmlFor='username'>Nome de usuário</label>
            </div>
            <div className='input_field'>
              <input 
                type='password'
                onChange={(e) => handleInputChange(e)} 
                name='password' 
                id='password' 
                required
                value={dataUser.password}
              />
              <label htmlFor='password'>Senha</label>
            </div>
          </form>

          <div className='social-media-login'>
            <div className='media-item fb-item'>
              <BsFacebook className='icon' alt='Ícone Facebook' />
            </div>
            <div className='media-item google-item'>
              <FcGoogle className='icon' alt='Ícone Google' />
            </div>
            <div className='media-item apple-item'>
              <AiFillApple className='icon' alt='Ícone Apple' />
            </div>
          </div>

          <div className='save-login'>
            <input 
              type='checkbox' 
              id='checkbox' 
              onChange={(e) => handleInputChange(e)} 
              name='save_login' 
              value={dataUser.save_login}
            />
            <label htmlFor='checkbox'>Manter login</label>
            <FaCheck className='check-icon'/>
          </div>
        </div>

        <div className='login-sucess'>
          <RiArrowRightLine className='icon' />
        </div>

        <div className='other-actions'>
          <div>Não consegue iniciar sessão?</div>
          <div>
            <div>Criar conta</div>
            <div>V1.0.0</div>
          </div>
        </div>
    </div>
  )
}