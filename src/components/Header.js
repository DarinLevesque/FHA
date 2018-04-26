import React from "react";
import Link from "gatsby-link";
import logo from "../img/fha-type-white.png";
import title from "../templates/about-page";

const styles = {};

const Header = ({ title }, { subtitle }) => (
  <section className="hero is-primary is-small">
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
      </div>
    </div>
    <div className="hero-foot">
      <nav className="tabs">
        <div className="container" />
      </nav>
    </div>
  </section>
);

export default Header;
