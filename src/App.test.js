import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './components/context/UserContext';
import * as authFns from './services/auth';
import * as postFns from './services/fetchUtils';

test('users can see postmodern!', () => {
  render( 
    <UserProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </UserProvider>
  );
  const linkElement = screen.getByText('postmodern!');
  expect (linkElement).toBeInTheDocument();
});

jest.mock('./services/auth');
jest.mock('./services/fetchUtils');

const mockUser = {
  id: '0dab2c65-5911-469c-9f12-8fb47ebe52f2',
  aud: 'authenticated',
  role: 'authenticated',
  email: 'random@example.com',
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

  const emailInput = screen.getByLabelText('Email');
  fireEvent.change(emailInput, { target: { value: 'random@example.com' } });
  expect(emailInput.value).toBe('random@example.com');

  const passwordInput = screen.getByLabelText('Password');
  fireEvent.change(passwordInput, { target: { value: '123456' } });
  expect(emailInput.value).toBe('random@example.com');
});

const fakePosts = [
  {
    id: 1,
    title: 'Fake Post #1',
    description: '#1 description',
    user_id: '0dab2c65-5911-469c-9f12-8fb47ebe52f2',
  },
  { id: 2, title: 'Fake Post #2', description: '#2 description' },
];

test('after signing in, user should be able to see all posts on the homepage', async () => {
  authFns.getUser.mockReturnValue(mockUser);
  postFns.getPosts.mockReturnValue(fakePosts);

  render(
    <UserProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </UserProvider>
  );
  await screen.findByText(/Fake Post #1/i);
  await screen.findAllByText(/description/i);
  await screen.findByText(/Fake Post #2/i);
});
