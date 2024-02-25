"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <Link href="/">
          <h3 className="logo">Forumify.</h3>
        </Link>
        <div className="navbar-content-wrapper">
          {!isHomePage && (
            <React.Fragment>
              <button className="register-btn">Register</button>
              <button className="register-btn">Log in</button>
              <button className="btn">Create a Post</button>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
