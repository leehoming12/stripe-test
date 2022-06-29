import { useStripe, useElements, PaymentElement, ElementsConsumer, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const options = {
        style : {
            base : {
                color : "#424770",
                letterSpacing: "0.025em",
                fontFamily: "Source Code Pro, monospace",
                "::placeholder" : {
                    color : "#aab7c4"
                }
            },
            invalid: {
                color : "#9e2146"
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        const { error, paymentMethod , payload } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        console.log("[PaymentMethod]", payload);

    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Card details
                <CardElement
                options={options}
                nReady={() => {
                    console.log("CardElement [ready]");
                  }}
                  onChange={event => {
                    console.log("CardElement [change]", event);
                  }}
                  onBlur={() => {
                    console.log("CardElement [blur]");
                  }}
                  onFocus={() => {
                    console.log("CardElement [focus]");
                  }}
                />
            </label>
            <button type="submit" disabled={!stripe || !elements}>Pay</button>
        </form>
    )
}




export default CheckoutForm