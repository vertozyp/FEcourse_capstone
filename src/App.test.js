import { render, screen, fireEvent, hasImputValue } from '@testing-library/react';
import BookingForm from './components/booking/BookingForm';
import {BrowserRouter} from "react-router-dom"

test('Renders the BookingForm heading', () => {
  render(<BrowserRouter><BookingForm /></BrowserRouter>);
  const headingElement = screen.getByText("When yould You like to come?");
  expect(headingElement).toBeInTheDocument();
})

test('Validates time picking', () => {
  render(<BrowserRouter><BookingForm /></BrowserRouter>);
  const expectedTimes = '<select id="book-time"><option>13:00</option><option>14:00</option><option>15:00</option><option>16:00</option><option>17:00</option></select>';
  const timeElement = screen.getByLabelText("Time *");
  expect(timeElement).toBeInTheDocument();
  expect(timeElement).toContainHTML(expectedTimes);
})


test('Check number of guests validation', () => {
  render(<BrowserRouter><BookingForm /></BrowserRouter>);
  const guestsField = screen.getByLabelText("Number of guests *");
  expect(guestsField).toBeInTheDocument();

  fireEvent.change(guestsField, {target: {value: "0"}});
  expect(hasImputValue(guestsField, "0")).toBe(true);
})