import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <h3 className="logo">Forumify.</h3>
        <div className="navbar-content-wrapper">
          <button className="register-btn">Register</button>
          <button className="register-btn">Log in</button>
          <button className="btn">Create a Post</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
