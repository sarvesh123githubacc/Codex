import { Router } from "express";
import { userLogin, userSignup } from "../controller/auth.js";
import userValidation from "../middleware/validateUser.js";
import {
	deleteUserById,
	getAllUsers,
	getUserById,
} from "../controller/user.js";

const userRouter = Router();

userRouter.post("/login", userLogin);
userRouter.post("/signup", userSignup);

userRouter.get("/:id", userValidation, getUserById);
userRouter.delete("/:id", userValidation, deleteUserById);
userRouter.get("/", userValidation, getAllUsers);

export default userRouter;
