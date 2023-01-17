import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";


const NavBar = () => {


  return (
    <div className="navbar-container">
      <div className="container-logo">
        <Link to="/">
        <img
          className="logo-navbar"
          src="https://res.cloudinary.com/duqi08ihm/image/upload/v1670721517/logo_fwjhup.ico"
          alt="logo nike"
          />
          </Link>
      </div>
      <ul className="navbar">
        <Link className="navbar-item" to="/" >All Products</Link>
        <Link className="navbar-item" to="/category/PopularItems" >Popular Items</Link>
        <Link className="navbar-item" to="/category/NewArrivals" >New Arrivals</Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;