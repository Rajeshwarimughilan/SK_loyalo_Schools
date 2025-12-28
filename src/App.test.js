import { render, screen } from '@testing-library/react';
import App from './App';

test('renders leadership-focused hero copy', () => {
  render(<App />);
  const hero = screen.getByText(/We build leaders/i);
  expect(hero).toBeInTheDocument();
});
