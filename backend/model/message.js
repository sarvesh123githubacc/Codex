import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
	{
		author: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
    community: {
      type: mongoose.Schema.Types.ObjectId
    }
	},
	{
		timestamps: true,
	},
);

const Message = mongoose.model("message", messageSchema);

export default Message;
