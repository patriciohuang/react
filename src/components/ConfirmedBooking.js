function ConfirmedBooking() {
  return (
    <section id="confirmed">
      <div className="col-lg-8 col-md-10 my-4 mx-auto">
        <div id="confirmed-img">
          <img src="/img/tick.jpeg" alt="Confirm tick" />
        </div>
        <div id="confirmed-button">
          <h2>Booking Confirmed</h2>
          <p>Your booking has been confirmed. Thank you!</p>
          <button className="button"><a href="/">Go to Home</a></button>
        </div>
      </div>
    </section>
  );
}

export default ConfirmedBooking;