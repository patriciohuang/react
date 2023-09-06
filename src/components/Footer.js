import Nav from "./Nav";
function Footer() {
  return ( 
    <footer>
      <div className="col-lg-8 col-md-10  d-flex justify-content-evenly my-4 mx-auto">
        <div className="footer-container">
          <img src="/img/Logo.svg" alt="Logo" />
        </div>
        <div className="footer-container">
          <h2>Little Lemon</h2>
          <Nav />
        </div>
        <div className="footer-container">
          <h2>Contact</h2>
          <ul>
            <li>Phone Number: +1 (555) 123-4567</li>
            <li>Email: contact@example.com</li>
            <li>Address: 123 Main Street, Cityville, State, 12345, USA</li>
          </ul>
        </div>
        <div className="footer-container">
          <h2>Social Media</h2>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  ); 
} 
 
export default Footer; 