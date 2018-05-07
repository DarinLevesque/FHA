import React from "react";
import Link, { navigateTo } from "gatsby-link";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const styles = {};

const Footer = () => (
  <footer styles={styles} className="page-footer footer font-small indigo pt-0">
    <div className="container">
      <div className="level is-mobile">
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <Link to="/about">
              <span className="icon">
                <i className="fas fa-search" />
              </span>
              About us
            </Link>
          </h6>
        </div>
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <Link to="/property-services">
              <span className="icon">
                <i className="fas fa-home" />
              </span>
              Property Services
            </Link>
          </h6>
        </div>
        <div className="col-md-2 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <Link to="/terms-of-service">
              <span className="icon">
                <i className="fas fa-exclamation" />
              </span>
              Terms of Service
            </Link>
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
            <Link to="/contact">
              <span className="icon">
                <i className="fas fa-envelope" />
              </span>
              Contact
            </Link>
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
            <span className="icon">
              <i className="fas fa-twitter" />
            </span>
          </a>
          <a className="gplus-ic">
            <span className="icon">
              <i className="fas fa-google-plus" />
            </span>
          </a>
          <a className="li-ic">
            <span className="icon">
              <i className="fas fa-linkedin" />
            </span>
          </a>
          <a className="ins-ic">
            <span className="icon">
              <i className="fas fa-instagram" />
            </span>
          </a>
          <a className="pin-ic">
            <span className="icon">
              <i className="fas fa-pinterest" />
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className="footer-copyright py-3 text-center has-text-centered is-centered">
      © 2018 Copyright
      <Link to="/"> Fair Housing Advocates, Inc.</Link>
    </div>
  </footer>
);

export default Footer;
