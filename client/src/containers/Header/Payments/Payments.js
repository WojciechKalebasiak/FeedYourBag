import React, { Component } from "react";
import { connect } from "react-redux";
import { handlePayment } from "../../../actions/";
import classnames from "classnames";
import StripeCheckout from "react-stripe-checkout";
import buttonStyles from "../Buttons/Buttons.module.css";
class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Feed Your Bag"
        description="5000 feedbacks for 10$? Seems fair."
        amount={1000}
        token={token => this.props.handlePayment(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}>
        <button
          className={classnames(
            [buttonStyles.NavButton],
            [buttonStyles.AddCreditsButton]
          )}>
          Add Credits
        </button> 
      </StripeCheckout>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  handlePayment: token => dispatch(handlePayment(token))
});
export default connect(null,mapDispatchToProps)(Payments);
