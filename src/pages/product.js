import React from 'react';
import StripeCheckout from 'gatsby-plugin-stripe-checkout';

export default class Purchase extends React.Component {
  onToken = (token) => {
    fetch('/.netlify/functions/createCharge/', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_bwDxe6R8crYZebNVmjYu9Dxr"
      />
    )
  }
}