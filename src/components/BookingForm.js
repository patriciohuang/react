import React, { useState } from 'react';

function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const [availableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { date, time, guests, occasion });
  };

  return (
    <form style={{ display: 'grid', maxWidth: '500px', gap: '20px' }} onSubmit={handleSubmit}>
      <div class="mb-3">
        <label htmlFor="res-date" classNaame="form-label">Choose date</label>
        <input
          className="form-control"
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div class="mb-3">
      <label htmlFor="res-time" classNaame="form-label">Choose time</label>
        <select
          className="form-select"
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
      </div>
      <div class="mb-3">
        <label htmlFor="guests" classNaame="form-label">Number of guests</label>
        <input
          className="form-control"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>
      <div class="mb-3">
        <label htmlFor="occasion" classNaame="form-label">Occasion</label>
        <select
          class="form-select"
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Gathering">Gathering</option>
          <option value="Date">Date</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <input id="submitbutton" type="submit" className="form-control" value="Make Your Reservation" />
    </form>
  );
}

export default BookingForm;