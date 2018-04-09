import React from "react";

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      stripeLoading: true
    };
    // onStripeUpdate must be bound or else clicking on button will produce error.
    this.onStripeUpdate = this.onStripeUpdate.bind(this);
    // binding loadStripe as a best practice, not doing so does not seem to cause error.
    this.loadStripe = this.loadStripe.bind(this);
  }

  loadStripe(onload) {
    if (!window.StripeCheckout) {
      const script = document.createElement("script");
      script.onload = function() {
        console.info("Stripe script loaded");
        onload();
      };
      script.src = "https://checkout.stripe.com/checkout.js";
      document.head.appendChild(script);
    } else {
      onload();
    }
  }

  componentDidMount() {
    this.loadStripe(() => {
      this.stripeHandler = window.StripeCheckout.configure({
        key: "pk_test_bwDxe6R8crYZebNVmjYu9Dxr",
        image: "https://stripe.com/img/documentation/checkout/marketplace.png",
        locale: "auto",
        token: (token, args) => {
          fetch("https://new.fairhousingact.org/purchase.js", {
            method: "POST",
            body: JSON.stringify({
              token,
              args,
              cart: this.props.cart,
              charge: {
                amount: "1000",
                currency: "USD"
              }
            })
          })
            .then(response => response.json())
            .then(json => {
              this.props.removeAllFromCart();
              return console.log(json);
            })
            .catch(error => {
              console.log("Fetch failed:" + error);
            });
        }
      });

      this.setState({
        stripeLoading: false,
        // loading needs to be explicitly set false so component will render in 'loaded' state.
        loading: false
      });
    });
  }

  componentWillUnmount() {
    if (this.stripeHandler) {
      this.stripeHandler.close();
    }
  }

  onStripeUpdate(e) {
    this.stripeHandler.open({
      name: "Fair Housing Advocates, Inc.",
      description: "Property Services",
      panelLabel: "Update Credit Card",
      zipCode: true,
      allowRememberMe: false
    });
    e.preventDefault();
  }

  render() {
    const { stripeLoading, loading } = this.state;
    return (
      <div>
        {loading || stripeLoading ? (
          <p>loading..</p>
        ) : (
          <button onClick={this.onStripeUpdate}>Add CC</button>
        )}
      </div>
    );
  }
}

export const testPageQuery = graphql`
  query TestQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
