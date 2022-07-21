const User = require("../models/User");
const {
	verifyToken,
	verifyTokenAuth,
	verifyTokenAndAdmin,
} = require("./verify");
const CryptoJS = require("crypto-js");

const router = require("express").Router();

//Update User
router.put("/:id", verifyTokenAuth, async (req, res) => {
	if (req.body.password) {
		req.body.password = CryptoJS.AES.encrypt(
			req.body.password,
			process.env.SECRET_PHRASE
		).toString();
	}

	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);

		res.status(200).json(updatedUser);
	} catch (error) {
		res.status(500).json(error);
	}
});

//Delete User
router.delete("/:id", verifyTokenAuth, async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json("User Deleted");
	} catch (error) {
		res.status(500).json(error);
	}
});

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		const { password, ...others } = user._doc;
		res.status(200).json(others);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET ALL USERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
	const query = req.query.new;
	try {
		const users = query
			? await User.find().sort({ _id: -1 }).limit(5)
			: await User.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
