import React from 'react';
import CardReactFormContainer from 'card-react';

import './checkout.css';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: true,
        stripeLoading: true,
    };
    // onStripeUpdate must be bound or else clicking on button will produce error.
    this.onStripeUpdate = this.onStripeUpdate.bind(this);
    // binding loadStripe as a best practice, not doing so does not seem to cause error.
    this.loadStripe = this.loadStripe.bind(this);
}

loadStripe(onload) {
    if(! window.StripeCheckout) {
        const script = document.createElement('script');
        script.onload = function () {
            console.info("Stripe script loaded");
            onload();
        };
        script.src = 'https://checkout.stripe.com/checkout.js';
        document.head.appendChild(script);
    } else {
        onload();
    }
}

componentDidMount() {

    this.loadStripe(() => {
        this.stripeHandler = window.StripeCheckout.configure({
            key: 'pk_test_bwDxe6R8crYZebNVmjYu9Dxr',
            image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
            locale: 'auto',
            token: (token) => {
                this.setState({ loading: true });
                // use fetch or some other AJAX library here if you dont want to use axios
                axios.post('/payments', {
                    stripeToken: token.id,
                });
            }
        });

        this.setState({
            stripeLoading: false,
            // loading needs to be explicitly set false so component will render in 'loaded' state.
            loading: false,
        });
    });
}

componentWillUnmount() {
    if(this.stripeHandler) {
        this.stripeHandler.close();
    }
}

onStripeUpdate(e) {
    this.stripeHandler.open({
        name: 'test',
        description: 'widget',
        panelLabel: 'Update Credit Card',
        allowRememberMe: false,
    });
    e.preventDefault();
}

render() {
    const { stripeLoading, loading } = this.state;
    return (
        <div>
            {(loading || stripeLoading)
                ? <p>loading..</p>
                : <button onClick={this.onStripeUpdate}>Add CC</button>
            }
            <form action="https://wt-5ea1ab379e697c2192ab2a77aebced14-0.run.webtask.io/stripe-payment/stripe-payment/payment?currency=USD&amount=2000&description=Test%20item" method="POST">
                <script
                src="https://checkout.stripe.com/checkout.js" class="stripe-button"
                data-key="pk_test_bwDxe6R8crYZebNVmjYu9Dxr"
                data-amount="2000"
                data-name="Stripe.com"
                data-description="Test item"
                data-locale="auto">
                </script>
            </form>
        </div>
    );
}
}