import User from "../model/user.js";
import { createSecret } from "../util/createSecret.js";
import bcrypt from "bcryptjs";

const userSignup = async (req, res, next) => {
	const {
		firstName,
		lastName,
		email,
		password,
		gender,
		bio,
		phone,
		primaryCondition,
		emergencyContact,
		emergencyRelation,
		emergencyPhone,
	} = req.body;
	if (!firstName || !email || !password || !gender) {
		return res.json({
			message: "FirstName, Email, Password and Gender are required",
		});
	}

	if (password.len < 8) {
		return res.json({ message: "Password must be atleast 8 long" });
	}

	const existingUser = await User.findOne({ email });
	if (existingUser) {
		return res.json({ message: "User already exists" });
	}

	const result = await User.create({
		firstName: firstName,
		lastName: lastName,
		password: password,
		email: email,
		phone: phone,
		bio: bio,
		medical: {
			primaryCondition: primaryCondition,
		},
		emergencyContact: {
			name: emergencyContact,
			relation: emergencyRelation,
			phone: emergencyPhone,
		},
		gender: gender,
	});

	const token = createSecret(result._id);
	res.cookie("token", token);
	res
		.status(201)
		.json({ message: "User signed in successfully", success: true, result });
	next();
};

const userLogin = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.json({ message: "Email and password are required" });
	}

	const user = await User.findOne({ email });
	if (!user) {
		return res.json({ messgae: "User does not exist" });
	}
	const auth = await bcrypt.compare(password, user.password);
	if (!auth) {
		return res.json({ message: "Incorrect password or email" });
	}
	const token = createSecret(user._id);
	res.cookie("token", token, {
		withCredentials: true,
		httpOnly: false,
	});
	res
		.status(201)
		.json({ message: "User logged in successfully", success: true });
};

export { userLogin, userSignup };
