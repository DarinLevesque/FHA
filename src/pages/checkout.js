import React from 'react';
import CardReactFormContainer from 'card-react';

export default class Checkout extends React.Component {
  render () {
    return (
      <div>
      <h1>Testing</h1>
      <form action="your-server-side-code" method="POST">
        <script
          src="https://checkout.stripe.com/checkout.js" className="stripe-button"
          data-key="pk_test_bwDxe6R8crYZebNVmjYu9Dxr"
          data-amount="12.99"
          data-zip-code="true"
          data-name="Fair Housing Advocates, Inc."
          data-description="Widget"
          data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
          data-locale="auto">
        </script>
      </form>
      
      </div>  
    )
  }
}