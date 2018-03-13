import React from 'react';
import CardReactFormContainer from 'card-react';

import './checkout.css';

export default class Checkout extends React.Component {
  render () {
    return (
      <div>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  Testing
                  </h2>
                  <div className="content">
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
                    <div id="card-wrapper"></div>
                    <CardReactFormContainer

                      // the id of the container element where you want to render the card element.
                      // the card component can be rendered anywhere (doesn't have to be in ReactCardFormContainer).
                      container="card-wrapper" // required

                      // an object contain the form inputs names.
                      // every input must have a unique name prop.
                      formInputsNames={
                        {
                          number: 'CCnumber', // optional — default "number"
                          expiry: 'CCexpiry',// optional — default "expiry"
                          cvc: 'CCcvc', // optional — default "cvc"
                          name: 'CCname' // optional - default "name"
                        }
                      }

                      // initial values to render in the card element
                      initialValues= {
                        {
                          number: '•••• •••• •••• ••••', // optional — default •••• •••• •••• ••••
                          cvc: '123', // optional — default •••
                          expiry: '16/12', // optional — default ••/••
                          name: 'Nancy Smith' // optional — default FULL NAME
                        }
                      }

                      // the class name attribute to add to the input field and the corresponding part of the card element,
                      // when the input is valid/invalid.
                      classes={
                        {
                          valid: 'valid-input', // optional — default 'jp-card-valid'
                          invalid: 'invalid-input' // optional — default 'jp-card-invalid'
                        }
                      }

                      // specify whether you want to format the form inputs or not
                      formatting={true} // optional - default true
                    >

                      <form>
                        <input placeholder="Full name" type="text" name="CCname" />
                        <input placeholder="Card number" type="text" name="CCnumber" />
                        <input placeholder="MM/YY" type="text" name="CCexpiry" />
                        <input placeholder="CVC" type="text" name="CCcvc" />
                      </form>

                    </CardReactFormContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>  
    )
  }
}