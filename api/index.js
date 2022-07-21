const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoute = require("./routes/user");

const authRoute = require("./routes/auth");

const productRoute = require("./routes/product");

const orderRoute = require("./routes/order");

const cartRoute = require("./routes/cart");

const stripeRoute = require("./routes/stripe");

dotenv.config();

mongoose
	.connect(process.env.MONGO)
	.then(() => {
		console.log("Connected to DB");
	})
	.catch((err) => {
		console.log(err);
	});
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(5000, () => {
	console.log("Listening on 5000");
});
