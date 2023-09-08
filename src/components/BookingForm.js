import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm({ availableTimes, updateTimes, submitForm }) {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [formValid, setFormValid] = useState(false);
  const [touchedFields, setTouchedFields] = useState({
    date: false,
    time: false,
    guests: false,
  });
  const [errors, setErrors] = useState({
    date: '',
    time: '',
    guests: '',
  });

  useEffect(() => {
    const dateIsValid = date !== '';
    const timeIsValid = availableTimes.includes(time);
    const guestsIsValid = guests > 1 && guests <= 10;

    setFormValid(dateIsValid && timeIsValid && guestsIsValid);

    // Update error messages only for fields that have been touched
    setErrors((prevErrors) => ({
      date: touchedFields.date && !dateIsValid ? 'Please choose a date' : '',
      time: touchedFields.time && !timeIsValid ? 'Please choose a valid time' : '',
      guests:
        touchedFields.guests && !guestsIsValid
          ? 'Number of guests must be between 2 and 10'
          : '',
    }));
  }, [date, time, guests, availableTimes, touchedFields]);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date, time, guests, occasion });
    navigate('/confirmation');
  };

  const handleDateChange = (date) => {
    setDate(date);
    updateTimes(date);
  };

  const handleInputBlur = (field) => {
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [field]: true,
    }));
  };

  return (
    <form style={{ display: 'grid', maxWidth: '500px', gap: '20px' }} onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="res-date" className="form-label">
          Choose date
        </label>
        <input
          className="form-control"
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => handleDateChange(e.target.value)}
          onBlur={() => handleInputBlur('date')}
          required
        />
        <div className="text-danger">{errors.date}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="res-time" className="form-label">
          Choose time
        </label>
        <select
          className="form-select"
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          onBlur={() => handleInputBlur('time')}
          required
        >
          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
        <div className="text-danger">{errors.time}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="guests" className="form-label">
          Number of guests
        </label>
        <input
          className="form-control"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          onBlur={() => handleInputBlur('guests')}
          required
        />
        <div className="text-danger">{errors.guests}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="occasion" className="form-label">
          Occasion
        </label>
        <select
          className="form-select"
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
      <input
        id="submitbutton"
        type="submit"
        className="form-control"
        value="Make Your Reservation"
        disabled={!formValid}
      />
    </form>
  );
}

export default BookingForm;
