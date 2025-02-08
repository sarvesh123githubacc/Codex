import express from "express";
import cookieParser from "cookie-parser";
import connectMongo from "./connection.js";
import userRouter from "./routes/user.js";
import communityRouter from "./routes/community.js";
import messageRouter from "./routes/message.js";

const app = express();
const PORT = 8080;

connectMongo("mongodb://127.0.0.1:27017/hacktu");

app.listen(PORT);
app.use(cookieParser());
app.use(express.json());
app.use("/users", userRouter);
app.use("/community", communityRouter);
app.use("/message", messageRouter);
