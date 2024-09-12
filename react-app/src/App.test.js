import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReservationForm from '../src/Components/NestedComponents/ConfirmedBooking';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),  // the documentation said to mock this as well, because without it, the button won't send you anywhere. Routing is hard, man..
}));

describe('ReservationForm', () => {
  it('renders the form fields correctly', () => {
    const availableTimes = ["17:00", "18:00", "19:00"];
    
    render(
      <BrowserRouter>
        <ReservationForm availableTimes={availableTimes} dispatch={jest.fn()} />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
  });

  it('fills and submits the form, then navigates to the ConfirmedBooking page', () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);

    const availableTimes = ["17:00", "18:00", "19:00"];
    
    render(
      <BrowserRouter>
        <ReservationForm availableTimes={availableTimes} dispatch={jest.fn()} />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2024-09-11' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: 2 } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Anniversary' } });

    // Submit
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    // Here I verify if the sumbit sends the user to the Confirmed Booking page with all of the properties in the form saved as state
    expect(mockNavigate).toHaveBeenCalledWith('/confirmed-booking', {
      state: {
        date: '2024-09-11',
        time: '17:00',
        guests: 2,
        occasion: 'Anniversary'
      }
    });
  });
});

// For some reason it doesn't work, even though I've tried anything, so if you know what may be the cause, add me on discord "justseal"!