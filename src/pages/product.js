import React from 'react';

export default class Buy extends React.Component {

    constructor(props:Object) {
        super(props);
        this.state = {
            loading: true,
            stripeLoading: true,
        };
    }

    loadStripe(onload:Function) {
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
            this.stripehandler = window.StripeCheckout.configure({
                key: STRIPE_PUBLISHABLE_KEY,
                image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
                locale: 'auto',
                token: (token) => {
                    this.setState({ loading: true });
                    axios.post('/your-server-side-code', {
                        stripeToken: token.id,
                    });
                }
            });

            this.setState({
                stripeLoading: false
            });
        });
    }

    componentWillUnmount() {
        if(this.stripehandler) {
            this.stripehandler.close();
        }
    }

    onStripeUpdate(e:Object) {
        this.stripehandler.open({
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
                    : <button onClick={this.onStripeUpdate}>Buy</button>
                }
            </div>
        );
    }
}