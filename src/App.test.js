import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';

describe('BookingForm', () => {
  test('should call updateTimes when date changes', () => {
    const mockUpdateTimes = jest.fn();

    render(<BookingForm availableTimes={[]} updateTimes={mockUpdateTimes} />);
    const dateInput = screen.getByLabelText('Choose date');
    const newDate = '2023-09-16'; // Replace with your desired date
    fireEvent.change(dateInput, { target: { value: newDate } });

    expect(mockUpdateTimes).toHaveBeenCalledWith(newDate);
  });
});
