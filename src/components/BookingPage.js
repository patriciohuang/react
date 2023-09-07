import BookingForm from "./BookingForm";

function BookingPage() {
  return (
    <main>
      <section id="reservation" className="col-lg-8 col-md-10 my-5 mx-auto">
        <div>
          <h2>Booking a table</h2>
        </div>
        <BookingForm />
      </section>
    </main>
  );
}

export default BookingPage;