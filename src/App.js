import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import InjectedCheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51Ktrm3BrFfmMymN9umaNVcfcSy3EvqqTK0ejUmEvWMr3qYC2L7EXHJ1XVHUEsVioDBFsNvqjrqzeiDvw4sMRnDoj00PTuRWmMW")

const App =  () => {
  const options = {
    clientSecret: `{{CLIENT_SECRET}}`,
  }
  return (
    <Elements stripe={stripePromise}>
      <div>
        Hello
      </div>
      <InjectedCheckoutForm/>
    </Elements>
  )


}

export default App