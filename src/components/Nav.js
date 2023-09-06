import { Link } from 'react-router-dom';
function Nav() {
  return ( 
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><Link to="/reservation">Reservation</Link></li>
      </ul>
    </nav>
  ); 
} 
 
export default Nav; 