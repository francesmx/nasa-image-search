import { render, screen } from '@testing-library/react';
import App from './App';

test('renders default page', () => {
  render(<App />);
  const title = screen.getByText(/NASA Image, Video & Audio Library/);
  expect(title).toBeInTheDocument();

  const searchBar = screen.getByLabelText(/What would you like to see?/);
  expect(searchBar).toBeInTheDocument();
});
