import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './components/context/UserContext';

import * as authFns from './services/auth';

jest.mock('./services/auth');
jest.mock('./components/Posts/Posts');

const mockUser = {
  id: '91569563-e646-4385-98e7-f16b685c921f',
  aud: 'authenticated',
  role: 'authenticated',
  email:'l0v35c00l@gmail.com'

};

test('user can sign in', async () => {
  authFns.getUser.mockReturnValue(null);
  authFns.authUser.mockReturnValue(mockUser);
  render(
    <UserProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </UserProvider>
  );

  const emailInput = screen.getByPlaceholderText(/email/i);
  fireEvent.change(emailInput, {
    target: { value: `adam@example.com` }
  });
  expect(emailInput.value).toBe('adam@example.com');

  const passwordInput = screen.getByPlaceholderText(/password/i);
  fireEvent.change(passwordInput, { target: { value: 123456789 } });

  const button = screen.getByRole(/button/i);
  fireEvent.click(button);

  const hello = await screen.findByText('sign out');
  expect(hello).toBeInTheDocument();
});

test('user lands on auth page', () => {
  // authFns.getUser.mockReturnValue(null);
  // authFns.authUser.mockReturnValue(mockUser);
  render(
    <UserProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </UserProvider>
  );

  const authPage = screen.getByText(/login/i);
  expect(authPage).toBeVisible(/login/i);

});

test('user can see title link', () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );

  const title = screen.getByText(/postmodern/i);
  expect(title).toBeInTheDocument(/postmodern/i);
});
