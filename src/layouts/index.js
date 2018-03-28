import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { scaleRotate as Menu } from 'react-burger-menu';
import StripeProvider from '../components/Stripe/Provider';
import injectStripe from '../components/Stripe/inject';
import Elements from '../components/Stripe/Elements';
import Element from '../components/Stripe/Element';
import PaymentRequestButtonElement from '../components/Stripe/PaymentRequestButtonElement';

import Navbar from '../components/Navbar';
import './all.sass';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const CardElement = Element('card', {sourceType: 'card'});
const CardNumberElement = Element('cardNumber', {sourceType: 'card'});
const CardExpiryElement = Element('cardExpiry');
const CardCVCElement = Element('cardCvc');
const PostalCodeElement = Element('postalCode');

export {
  StripeProvider,
  injectStripe,
  Elements,
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  PaymentRequestButtonElement,
};



const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <html lang="en"/>
      <title>Fair Housing Advocates, Inc.</title>
      <script src="https://js.stripe.com/v3/"></script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous" />
    </ Helmet>
    <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Fair Housing Act" style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://github.com/DarinLevesque/dl-gatsby-netlify" target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
    <div id="outer-container">
      <Navbar />
      <main id="page-wrap">
        <div>{children()}</div>
      </main>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
