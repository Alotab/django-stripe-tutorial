console.log("Sanity check!");


// use the Fetch API to make an XHR (XMLHttpRequest) request to the new /config/ endpoint in static/main.js
//Get stripe publishable key

// fetch("/config/")
// .then((result) => { return result.json(); })
// .then((data) => {
//     // initialize Stripe.js
//     const stripe = Stripe(data.publicKey)


//     // Event handler
//     document.querySelector("#submitBtn").addEventListener('click', () =>{
//         // Get checkout Session ID
//         fetch("/create-checkout-session/")
//         .then((result) => { return result.json();})
//         .then((data) => {
//             console.log(data)
//             // Redirect to Stripe Checkout
//             return stripe.redirectToCheckout({sessionId: data.sessionId})
//         })
//         .then((res) => {
//             console.log(res);
//         });
//     })
// })

// static/main.js

console.log("Sanity check!");

// Get Stripe publishable key
fetch("/config/")
.then((result) => { return result.json(); })
.then((data) => {
  // Initialize Stripe.js
  const stripe = Stripe(data.publicKey);

  // new
  // Event handler
  document.querySelector("#submitBtn").addEventListener("click", () => {
    // Get Checkout Session ID
    fetch("/create-checkout-session/")
    .then((result) => { return result.json(); })
    .then((data) => {
      console.log(data);
      // Redirect to Stripe Checkout
      return stripe.redirectToCheckout({sessionId: data.sessionId})
    })
    .then((res) => {
      console.log(res);
    });
  });
});






