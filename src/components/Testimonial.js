function Testimonial() {
  return ( 
    <section id="testimonial">
      <div className="col-lg-8 col-md-10 py-5 mx-auto">
        <div>
          <h2>Testimonials</h2>
        </div>
        <div className="d-flex">
          <div className="card" style={{width: 18 + 'rem'}}>
            <div className="img-container">
              <img src="/img/person3.jpeg" className="card-img-top" alt="Alex" />
            </div>
            <div className="card-body">
              <p>⭐️⭐️⭐️⭐️⭐️</p>
              <h3 className="card-title">Alex P.</h3>
              <p className="card-text">"I can't get enough of the amazing dishes at this restaurant! Each bite is a burst of flavor, and the presentation is as impressive as the taste. A must-visit for foodies!"</p>
            </div>
          </div>
          <div className="card lg-mx-3" style={{width: 18 + 'rem'}}>
            <div className="img-container">
              <img src="/img/person1.jpeg" className="card-img-top" alt="Linda" />
            </div>
            <div className="card-body">
              <p>⭐️⭐️⭐️⭐️⭐️</p>
              <h3 className="card-title">Linda W.</h3>
              <p className="card-text">"From the appetizers to the desserts, this restaurant's dishes are a culinary journey. I had the pleasure of savoring their signature dish, and it was pure gastronomic delight!"</p>
            </div>
          </div>
          <div className="card" style={{width: 18 + 'rem'}}>
            <div className="img-container">
              <img src="/img/person2.jpeg" className="card-img-top" alt="Mike" />
            </div>
            <div className="card-body">
              <p>⭐️⭐️⭐️⭐️⭐️</p>
              <h3 className="card-title">Mike T.</h3>
              <p className="card-text">"I'm a self-proclaimed food critic, and this restaurant exceeded my expectations. The dishes are not just meals; they are a work of art. It's like a symphony for your taste buds!"</p>
            </div>
          </div>
          <div className="card lg-ms-3" style={{width: 18 + 'rem'}}>
            <div className="img-container">
              <img src="/img/person.jpeg" className="card-img-top" alt="Mike" />
            </div>
            <div className="card-body">
              <p>⭐️⭐️⭐️⭐️⭐️</p>
              <h3 className="card-title">Mike T.</h3>
              <p className="card-text">"I'm a self-proclaimed food critic, and this restaurant exceeded my expectations. The dishes are not just meals; they are a work of art. It's like a symphony for your taste buds!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  ); 
} 
 
export default Testimonial; 