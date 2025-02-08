import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 8080;

app.listen(PORT);
app.use(cookieParser());
app.use(express.json());
