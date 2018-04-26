import React from "react";
import Link, { navigateTo } from "gatsby-link";

const styles = {};

const Footer = () => (
  <footer styles={styles} className="page-footer footer font-small indigo pt-0">
    <div className="container">
      <div className="has-text-centered">
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <Link to="/about">About us</Link>
          </h6>
        </div>
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <Link to="/property-services">Property Services</Link>
          </h6>
        </div>
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <Link to="/terms-of-service">Terms of Service</Link>
          </h6>
        </div>
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <OutboundLink
              href="https://blog.fairhousingact.org"
              onClick={() => this.closeMenu()}
            >
              <span className="icon">
                <i className="fas fa-newspaper" />
              </span>
              Blog
            </OutboundLink>
          </h6>
        </div>
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <Link to="/contact">Contact</Link>
          </h6>
        </div>
      </div>
      <hr className="rgbawhitelight" />
      <div className="has-text-centered">
        <div>
          <p>
            Fair Housing Advocates, Inc provides industry leading education and
            resources in regard to Fair Housing Act laws and regulations.
          </p>
        </div>
      </div>
      <hr className="clearfix d-md-none rgbawhitelight" />
      <div className="row pb-3">
        <div className="has-text-centered is-mobile">
          <a className="fb-ic">
            <span className="icon">
              <i className="fas fa-facebook" />
            </span>
          </a>
          <a className="tw-ic">
            <i className="fas fa-twitter fa-lg white-text" />
          </a>
          <a className="gplus-ic">
            <i className="fas fa-google-plus fa-lg white-text" />
          </a>
          <a className="li-ic">
            <i className="fas fa-linkedin fa-lg white-text" />
          </a>
          <a className="ins-ic">
            <i className="fas fa-instagram fa-lg white-text" />
          </a>
          <a className="pin-ic">
            <i className="fas fa-pinterest fa-lg white-text" />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-copyright py-3 text-center">
      © 2018 Copyright
      <Link to="/"> Fair Housing Advocates, Inc.</Link>
    </div>
  </footer>
);

export default Footer;
