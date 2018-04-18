import React from "react";
import logo from "../img/fha-type-white.png";

const styles = {};

const Header = () => (
  <section className="hero is-primary is-small">
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src={logo} alt="Logo" />
            </a>
          </div>
        </div>
      </nav>
    </div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">Title</h1>
        <h2 className="subtitle">Subtitle</h2>
      </div>
    </div>
    <div className="hero-foot">
      <nav className="tabs">
        <div className="container">
          <ul>
            <li className="is-active">
              <a>Overview</a>
            </li>
            <li>
              <a>Modifiers</a>
            </li>
            <li>
              <a>Grid</a>
            </li>
            <li>
              <a>Elements</a>
            </li>
            <li>
              <a>Components</a>
            </li>
            <li>
              <a>Layout</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
);

export default Header;
