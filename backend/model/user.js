import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
		},
		email: {
			type: String,
			required: true,
			match: /.+\@.+\..+/,
			unique: true,
		},
		gender: {
			type: String,
			enum: ["male", "female", "other"],
			required: true,
		},
		phoneNumber: {
			type: Number,
			min: 1000000000,
			max: 9999999999,
		},
		communities: {
			type: [mongoose.Schema.Types.ObjectId],
		},
		medicalHistory: {
			primaryCondition: {
				type: String,
			},
		},
		emergencyContact: {
			name: {
				type: String,
			},
			relation: {
				type: String,
			},
			phoneNumber: {
				type: Number,
				min: 1000000000,
				max: 9999999999,
			},
		},
	},
	{
		timestamps: true,
	},
);

const User = mongoose.model("user", userSchema);

export default User;
