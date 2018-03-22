import uuid from 'uuid/v4';

const fs = require("fs");
const toml = require('toml');
const config = toml.parse(fs.readFileSync('netlify.toml'));

const SECRET_KEY = process.env.STRIPE_SECRET_KEY !== undefined
  ? process.env.STRIPE_SECRET_KEY
  : config.context.base.environment.STRIPE_SECRET_KEY;

const stripe = require('stripe')(SECRET_KEY);

const statusCode = 200;
const headers = {
  "Access-Control-Allow-Origin" : "*.fairhousingact.org",
  "Access-Control-Allow-Headers": "Content-Type"
};

exports.handler = function(event, context, callback) {

    //-- We only care to do anything if this is our POST request.
    if(event.httpMethod !== 'POST' || !event.body) {
      callback(null, {
        statusCode,
        headers,
        body: {}
      });
    }
  }

  const data = JSON.parse(event.body);

  //-- Make sure we have all required data. Otherwise, escape.
  if(
    !data.token ||
    !data.amount ||
    !data.idempotency_key
  ) {

    console.error('Required information is missing.');

    callback(null, {
      statusCode,
      headers,
      body: JSON.stringify({status: 'missing-information'})
    });

    return;
  }
}

stripe.charges.create(
    {
      currency: 'usd',
      amount: data.amount,
      source: data.token.id,
      receipt_email: data.token.email,
      description: `charge for a widget`
    },
    {
      idempotency_key: data.idempotency_key
    }, (err, charge) => {
  
      if(err !== null) {
        console.log(err);
      }
  
      let status = (charge === null || charge.status !== 'succeeded')
        ? 'failed'
        : charge.status;
  
      callback(null, {
        statusCode,
        headers,
        body: JSON.stringify({status})
      });
    }
  );