// TODO: add pulishable key

import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/common/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="Payment"
        subheading="Please pay to eat"
      ></SectionTitle>

      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
