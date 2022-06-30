import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('grows bee', () => {
  render(<App />);
  const beeElement = screen.getByText(/Sip Some Juice/i);
  expect(beeElement).toBeInTheDocument();
});

test('if the user clicks 🏵️ Add Rosettes 🏵️ button, there should be one more rosette on the screen', () => {
  render(<App />);
  const emojisOnLoad = screen.getAllByText(/🏵️/i);

  expect(emojisOnLoad.length).toBe(2);

  const rosetteButton = screen.getByText(/🏵️ Add Rosettes 🏵️/i);

  fireEvent.click(rosetteButton);

  const emojisAfterClick = screen.getAllByText(/🏵️/i);

  expect(emojisAfterClick.length).toBe(3);
});
