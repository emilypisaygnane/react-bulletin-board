import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { signOut } from '../../services/auth';
import { UserContext } from '../../context/UserContext';

import './Navbar.css';

export default function Navbar() {

  const { user, setUser } = useContext(UserContext);

  const handleSignout = async () => {
    await signOut();
    setUser(null);
  };

  if (!user) return <Redirect to="/auth/sign-in" />;

  return (
    <section className="nav-wrapper">
      <header>
        { user && (
          <>
            <div className="title-link"><a className="title-link" href="/todos">todos!</a></div>
            <p className="header-text">signed in as <span className="header-text">{ user.email }</span></p>
            <div className="signout-button">
              <button onClick={ handleSignout }>sign out</button>
            </div>
          </>
        ) }

      </header>
    </section>
  );
}
