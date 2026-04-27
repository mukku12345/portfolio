import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero and contact section', () => {
  render(<App />);
  expect(screen.getByText(/Mukesh Kushwaha/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /view resume/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /interested in working together/i })).toBeInTheDocument();
});
