import React from "react";
import Link from "gatsby-link";
import logo from "../img/fha-type-white.png";
import title from "../templates/about-page";
// import "../../node_modules/bulma-carousel/dist/bulma-carousel.js";

import carousel1 from "../img/house-window-chair-verandah.jpg";
import carousel2 from "../img/brickbuilding.jpg";
import carousel3 from "../img/marine.jpg";

const styles = {};

const Header = ({ title }, { subtitle }) => (
  <div>
    <section className="hero is-medium has-carousel">
      <div
        className="hero-carousel carousel-animated carousel-animate-fade"
        data-autoplay="true"
        data-delay="8000"
      >
        <div className="carousel-container">
          <div className="carousel-item has-background is-active">
            <figure className="image is-background">
              <img src={carousel1} />
            </figure>
          </div>
          <div className="carousel-item has-background">
            <figure className="image is-background">
              <img src={carousel2} />
            </figure>
          </div>
          <div className="carousel-item has-background">
            <figure className="image is-background">
              <img src={carousel3} />
            </figure>
          </div>
        </div>
        <div className="carousel-navigation is-overlay">
          <div className="carousel-nav-left">
            <i className="fa fa-chevron-left" aria-hidden="true" />
          </div>
          <div className="carousel-nav-right">
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="hero-head">
        <nav className="navbar is-transparent">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <Link to="/blog" className="navbar-item has-text-white">
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body has-text-centered">
        <div className="columns is-mobile is-centered">
          <div className="column is-half is-narrow">
            <h1 className="title">Fair Housing Advocates, Inc.</h1>
            <h2 className="subtitle">Your Fair Housing Experts</h2>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Header;
