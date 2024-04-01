import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const tagline = screen.getByText('This app will soon be another React tic-tac-toe game.');
  expect(tagline).toBeInTheDocument();
});
