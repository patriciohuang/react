function Special() {
  return ( 
    <section id="special">
      <div className="col-lg-8 col-md-10 py-5 mx-auto">
        <div className="my-5">
          <h2>Specials</h2>
        </div>
        <div className="d-flex">
          <div className="card" style={{width: 18 + 'rem'}}>
            <img src="/img/greek salad.jpg" className="card-img-top" alt="Greek salad" />
            <div className="card-body">
              <div>
                <div className="d-flex justify-content-between">
                  <h3 className="card-title">Greek Salad</h3>
                  <p>$12.99</p>
                </div>
                <p className="card-text">The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              </div>
              <a href="/" className="d-flex justify-content-between">
                Order Delivery
                <img src="/img/Dish icon.svg" alt="Bootstrap" width="32" height="32" />
              </a>
            </div>
          </div>
          <div className="card" style={{width: 18 + 'rem'}}>
            <img src="/img/bruchetta.svg" className="card-img-top" alt="Greek salad" />
            <div className="card-body">
              <div>
                <div className="d-flex justify-content-between">
                  <h3 className="card-title">Bruschetta</h3>
                  <p>$5.99</p>
                </div>
                <p className="card-text">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.</p>
              </div>
              <a href="/" className="d-flex justify-content-between">
                Order Delivery
                <img src="/img/Dish icon.svg" alt="Bootstrap" width="32" height="32" />
              </a>
            </div>
          </div>
          <div className="card" style={{width: 18 + 'rem'}}>
            <img src="/img/lemon dessert.jpg" className="card-img-top" alt="Greek salad" />
            <div className="card-body">
              <div>
                <div className="d-flex justify-content-between">
                  <h3 className="card-title">Lemon Dessert</h3>
                  <p>$5.00</p>
                </div>
                <p className="card-text">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              </div>
              <a href="/" className="d-flex justify-content-between">
                Order Delivery
                <img src="/img/Dish icon.svg" alt="Bootstrap" width="32" height="32" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  ); 
} 
 
export default Special; 