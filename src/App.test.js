import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import BookingForm from './components/BookingForm';

describe('BookingForm', () => {
  test('should call updateTimes with the selected date', async () => {
    const mockUpdateTimes = jest.fn();

    render(
      <BrowserRouter>
        <BookingForm availableTimes={[]} updateTimes={mockUpdateTimes} />
      </BrowserRouter>
    );

    await act(async () => { // Wrap the code that updates state in act
      const dateInput = screen.getByLabelText('Choose date');
      userEvent.type(dateInput, '2023-09-16');
    });

    await waitFor(() => {
      expect(mockUpdateTimes).toHaveBeenCalledWith('2023-09-16');
    });
  });
});
