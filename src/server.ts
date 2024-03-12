import express from "express";
import { userRouter } from "./routes/user.routes";

const app = express();

app.use(express.json());

app.use(userRouter)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
