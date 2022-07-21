const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register

router.post("/register", async (req, res) => {
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		password: CryptoJS.AES.encrypt(
			req.body.password,
			process.env.SECRET_PHRASE
		).toString(),
	});

	try {
		await newUser.save((err, data) => {
			if (data) {
				res.status(201).json(newUser);
			} else console.log(err);
		});
	} catch (error) {
		res.status(500).json(error);
	}
});

router.post("/login", async (req, res) => {
	try {
		const username = req.body.username;
		const originalPassword = req.body.password;
		const user = await User.findOne({ username: username });
		if (!user) res.status(401).json("Wrong Credentials");
		//decrypt password and convert from hash to string using UTF8 encoding
		const decryptedPassword = CryptoJS.AES.decrypt(
			user.password,
			process.env.SECRET_PHRASE
		).toString(CryptoJS.enc.Utf8);
		if (decryptedPassword != originalPassword) {
			res.status(401).json("Wrong Password");
		}

		const accessToken = jwt.sign(
			{
				id: user._id,
				isAdmin: user.isAdmin,
			},
			process.env.JWT_KEY,
			{ expiresIn: "3d" }
		);

		//Separate password from other fields, document is stored inside _doc field
		const { password, ...others } = user._doc;
		res.status(200).json({ ...others, accessToken });
	} catch (error) {
		res.status(500).json(error);
	}
});

router.post("/logout", async (req, res) => {
	res.status(200).json("DONE");
});

module.exports = router;
