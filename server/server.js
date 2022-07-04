const express = require('express');
const app = express();

const stripe = require('stripe')('sk_test_51Ktrm3BrFfmMymN9VJ4JhZHoFJPROIP42WcdLERATlrpyoZeMDmVTHO7YdzzuFZkkyBcF96rMRlDrgu6S73O8Jbf00mDshTzyK')

app.use(express.static('build'))

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'hkd',
          product_data: {
            name: 'Tesla',
          },
          unit_amount: 4000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:4242/success.html',
    cancel_url: 'http://localhost:4242/cancel.html',
  });

  res.redirect(303, session.url);
});




app.listen(4242, () => console.log(`Listening on port ${4242}!`));