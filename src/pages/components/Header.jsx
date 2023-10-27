import React from "react";
import "./style/header.css";
import logo from "../../assets/logo.png";
import { BsChevronDown } from "react-icons/bs";
import PrimaryButton from "./PrimaryButton";

function Header() {
  return (
    <header id="header" className="header">
      {/* logo */}
      <div className="logo__container">
        <img src={logo} alt="landguru" />
        <span className="logo__text">landguru</span>
      </div>
      {/* menu */}
      <div className="menu__Container">
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li className="drop__down">
            <p>
              <span>adersite</span> <BsChevronDown />
            </p>
            <ul>
              <li>adersite </li>
            </ul>
          </li>

          <li className="drop__down">
            <p>
              <span>supports</span> <BsChevronDown />
            </p>
            <ul>
              <li>adersite </li>
            </ul>
          </li>
          <li>
            <a href="tel:6261282518">contact</a>
          </li>
        </ul>
      </div>
      {/* button */}
      <PrimaryButton text={"Try for Free"}/>
    </header>
  );
}

export default Header;
