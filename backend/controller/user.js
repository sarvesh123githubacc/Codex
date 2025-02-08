import User from "../model/user.js";

const getUserById = async (req, res) => {
	const user = await User.findById(req.params.id);
	if (!user) {
		return res.json({ message: "User does not exist" });
	}

	return res.json(user);
};

const getAllUsers = async (req, res) => {
	const users = await User.find({});
	return res.json(users);
};

const deleteUserById = async (req, res) => {
	const result = await User.findByIdAndDelete(req.params.id);
	return res.json(result);
};

export { getUserById, getAllUsers, deleteUserById };
