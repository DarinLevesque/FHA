import React from 'react';

import './checkout.css';

export default class Checkout extends React.Component {
 render() {
    return (
        <div>
            <form action="https://new.fairhousingact.org/.netlify/functions/purchase" method="POST">
            <script
                src="https://checkout.stripe.com/checkout.js" class="stripe-button"
                data-key="pk_test_bwDxe6R8crYZebNVmjYu9Dxr"
                data-image="/public/favicon/home_white_192x192.png"
                data-name="FHA buy"
                data-description="Subscription for 1 weekly box"
                data-amount="2000"
                data-label="Sign Up Now for $20/month!">
            </script>
            </form>
        </div>
    );
}
}