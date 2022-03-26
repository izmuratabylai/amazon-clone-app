import React from "react";
import { Link } from "react-router-dom";


import "./header.css";
import ShearchIcon from "@material-ui/icons/Search";
import BasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from "../../contexts/StateProvider";
import { auth } from "../../utils/firesbase/firebse";


const Header = () => {
  
  const [{ basket, user }] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut()
    }
  }


  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.seekpng.com/png/full/18-181177_amazon-logo-png-magnetic-rinse-cup-with-toothbrush.png"
          alt="amazon__logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <ShearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthenticaton}>
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns </span>
          <span className="header__optionLineTwo">& Orders </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your </span>
          <span className="header__optionLineTwo">Prime </span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <BasketIcon />
            <span className="header__basketCount  header__optionLineTwo">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
