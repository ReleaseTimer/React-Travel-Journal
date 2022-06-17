import React from "react";
import Logo from "../images/logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} />

      <h1>My Travel Journal</h1>
    </div>
  );
}
