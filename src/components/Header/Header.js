import React from "react";
import "./Header.scss";

function Header({ text }) {
  return (
    <header className="header__bar" data-test="component-Header">
        <h1 className="header__text">{text}</h1>
    </header>
  );
}

export default Header;
