import React from 'react';


export default class Product extends React.Component {
render() {
    return (
        <div>
            <form action="/.netlify/functions/startCharge" method="POST">
            <script
                src="https://checkout.stripe.com/checkout.js" class="stripe-button"
                data-key="pk_test_bwDxe6R8crYZebNVmjYu9Dxr"
                data-image="images/marketplace.png"
                data-name="Emma's Farm CSA"
                data-description="Subscription for 1 weekly box"
                data-amount="2000"
                data-label="Sign Up Now for $20/month!">
            </script>
            </form>
        </div>
    );
}
}
