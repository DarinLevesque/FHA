import React from "react";

import logo from "../img/fha-type-white.png";

const styles = {};

const Header = () => (
  <section class="hero is-primary is-small">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src={logo} alt="Logo" />
            </a>
          </div>
        </div>
      </nav>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Title</h1>
        <h2 class="subtitle">Subtitle</h2>
      </div>
    </div>
    <div class="hero-foot">
      <nav class="tabs">
        <div class="container">
          <ul>
            <li class="is-active">
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
