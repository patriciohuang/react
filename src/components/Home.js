function Home() {
  return ( 
    <section id="home">
      <div className="d-flex col-lg-8 col-md-10 py-5 mx-auto">
        <div id="info" className="pe-3">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="my-4">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className="button"><a href="/reservation">Reserve a table</a></button>
        </div>
        <div id="info-img">
          <img src="/img/restauranfood.jpg" alt="Restaurant Food"/>
        </div>
      </div>
    </section>
  ); 
} 
 
export default Home; 