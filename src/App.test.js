import { render, screen } from '@testing-library/react';
import App from './App';

test('grows bee', () => {
  render(<App />);
  const beeElement = screen.getByText(/Sip Some Juice/i);
  expect(beeElement).toBeInTheDocument();
});
