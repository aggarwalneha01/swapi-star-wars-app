import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Vehicles link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Vehicles/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Starships link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Starships/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Star Wars API link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Star Wars API/i);
  expect(linkElement).toBeInTheDocument();
});
