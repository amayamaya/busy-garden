import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// test('find grow bee button', () => {
//   render(<App />);
//   const beeElement = screen.getByText(/Sip Some Juice/i);
//   expect(beeElement).toBeInTheDocument();
// });

test('if the user clicks 🏵️ Add Rosettes 🏵️ button, there should be one more rosette on the screen', () => {
  render(<App />);
  const emojisOnLoad = screen.getAllByText(/🏵️/i);

  expect(emojisOnLoad.length).toBe(2);

  const rosetteButton = screen.getByText(/🏵️ Add Rosettes 🏵️/i);

  fireEvent.click(rosetteButton);

  const emojisAfterClick = screen.getAllByText(/🏵️/i);

  expect(emojisAfterClick.length).toBe(3);
});

// test ('if user clicks rosette in the flowerbed, the rosette disappears', () => {
//   render (<App />);
//   const rosettesOnLoad = screen.getAllByText(/🏵️/i);

//   expect(rosettesOnLoad.length).toBe(2);

//   const rosetteDeleteButton = screen.getByText(/🏵️/i);

//   fireEvent.click(rosetteDeleteButton);

//   const rosettesAfterClick = screen.getByAltText(/🏵️/i);

//   expect(rosettesAfterClick.length).toBe(1);
// });

test('if use clicks 🌞 or 🌚 window switches to Dark Mode', async () => {
  render(<App />);

  const darkModeButton = screen.getByText(/🌞 or 🌚/i);

  fireEvent.click(darkModeButton);

  const pageAfterClick = await screen.findByText(/Dark/i);

  expect(pageAfterClick).toBeInTheDocument();
});
