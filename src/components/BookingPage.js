import { useEffect, useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../api";
import { useNavigate } from "react-router-dom";

const ACTIONS = {
  UPDATE_TIMES: 'update-times'
}

const initialAvailableTimes = [];

function bookingReducer(state, action){
  switch (action.type) {
    case ACTIONS.UPDATE_TIMES:
      return action.payload.times;
    default:
      return state;
  }
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(bookingReducer, initialAvailableTimes);
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    fetchAPI(today)
    .then(times => {
      dispatch({ type: ACTIONS.UPDATE_TIMES, payload: { date: today, times } });
    })
    .catch(error => {
      console.error("Error fetching available times:", error);
    });
  }, []);

  function updateTimes(selectedDate) {
    fetchAPI(selectedDate)
    .then(times => {
      dispatch({ type: ACTIONS.UPDATE_TIMES, payload: { date: selectedDate, times } });
    })
    .catch(error => {
      console.error("Error fetching available times:", error);
    });
  }

  const submitForm = (formData) => {
    submitAPI(formData)
      .then((result) => {
        if (result) {
          navigate("/confirmation");
        } else {
          console.error("Form submission failed.");
        }
      })
      .catch((error) => {
        console.error("API call error:", error);
      });
  };
  return (
    <main>
      <section id="reservation" className="col-lg-8 col-md-10 my-5 mx-auto">
        <div>
          <h2>Booking a table</h2>
        </div>
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm}/>
      </section>
    </main>
  );
}

export default BookingPage;
