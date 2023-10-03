import { render, screen } from '@testing-library/react';
import BookingPage from './components/booking/BookingPage';

test('Renders the BookingForm heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();
})

test('Validates time picking functions', () => {
  render(<BookingPage />);
})