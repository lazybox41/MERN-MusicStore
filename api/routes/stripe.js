const router = require("express").Router();

const Stripe = require("stripe");
const stripe = Stripe(
	"sk_test_51JlsDMSEqkjgaboezAn1vgJ5Z7u66GaepyiQv3vjordARHElgrS69iSQthb4J06XazhIcRpvw6k3ay6mQ0yl5X8y00u1Horqaq"
);

router.post("/payment", async (req, res) => {
	await stripe.charges.create(
		{
			source: req.body.tokenId,
			amount: req.body.amount,
			currency: "inr",
			description: "test",
		},
		(stripeErr, stripeRes) => {
			if (stripeErr) {
				res.status(500).json(stripeErr);
			} else {
				res.status(200).json(stripeRes);
			}
		}
	);
});

module.exports = router;
