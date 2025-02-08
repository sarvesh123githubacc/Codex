import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
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
		bio: {
			type: String,
		},
		phoneNumber: {
			type: Number,
			min: 1000000000,
			max: 9999999999,
		},
		communities: {
			type: [mongoose.Schema.Types.ObjectId],
		},
		experience: {
			years: {
				type: Number,
				required: true,
			},
			expertise: {
				type: String,
				required: true,
			},
		},
		clinic: {
			name: {
				type: String,
			},
			location: {
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

const Doctor = mongoose.model("doctor", doctorSchema);

export default Doctor;
