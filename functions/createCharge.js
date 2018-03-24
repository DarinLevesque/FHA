import stripe from 'stripe';

exports.handler = function(event, context, callback) {
    var stripe = require("stripe")("sk_test_eSGpVDAcRjBrUoKVlvhsyNAs");

    const charge = stripe.charges.create({
    amount: 999,
    currency: 'usd',
    source: 'tok_visa',
    receipt_email: 'jenny.rosen@example.com',
    });
    console.log('created charge from ' {receipt_email})
}