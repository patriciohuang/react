import { useReducer } from "react";
import BookingForm from "./BookingForm";

const ACTIONS = {
  UPDATE_TIMES: 'update-times'
}

const initialAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

function bookingReducer(state, action){
  switch (action.type) {
    case ACTIONS.UPDATE_TIMES:
      console.log('update available times ', action.payload.date)
      return state;
    default:
      return state;
  }
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(bookingReducer, initialAvailableTimes);

  function updateTimes(selectedDate) {
    dispatch({type: ACTIONS.UPDATE_TIMES, payload: { date: selectedDate }})
  }

  return (
    <main>
      <section id="reservation" className="col-lg-8 col-md-10 my-5 mx-auto">
        <div>
          <h2>Booking a table</h2>
        </div>
        <BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>
      </section>
    </main>
  );
}

export default BookingPage;