import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ children }) => <div>{children}</div>,
  Link: ({ children }) => <a>{children}</a>,
}));

test('renders bookshelf app', () => {
  render(<App />);
  const linkElement = screen.getByText(/BookShelf App/i);
  expect(linkElement).toBeInTheDocument();
});
