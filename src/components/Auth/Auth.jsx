import React from 'react';
import { Redirect, useParams, Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { authUser } from '../../services/auth';
import { UserContext } from '../../context/UserContext';
import './Auth.css';

export default function Auth() {
  const { type } = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, setUser } = useContext(UserContext);

  const authenticateUser = async () => {
    const userResponse = await authUser(email, password, type);
    setUser(userResponse);
    setEmail('');
    setPassword('');
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <section className="auth-container">

      <div className="auth-header">
        <div className="email-wrapper">
          <input className="email-input" type="text" value={ email } onChange={ (e) => setEmail(e.target.value) } placeholder="email" />
        </div>
        <div className="password-wrapper">
          <input className="password-input" type="password" value={ password } onChange={ (e) => setPassword(e.target.value) } placeholder="password" /></div>
        <div className="auth-button-wrapper"><button className="auth-button" onClick={ authenticateUser }>{ type }</button></div>
        {type === 'sign-in' ?
          <Link className='auth-link' to='/auth/sign-up'>sign-up</Link> :
          <Link className='auth-link' to='/auth/sign-in'>sign-in</Link>
        }
      </div>

      <div className="auth-body">
        <h1>postmodern!</h1>
        <br />
        <hr />
        <h4>login.</h4>
      </div>

    </section>
  );
}