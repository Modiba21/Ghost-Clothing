const express = require("express");
const app = express();

app.use(express.json());

// 🔥 THIS WILL CONNECT TO STRIPE LATER
app.post("/create-checkout-session", (req, res) => {

    const cart = req.body.cart;

    console.log("Cart received:", cart);

    // Temporary response
    res.json({
        url: "https://checkout.stripe.com/test-placeholder"
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});