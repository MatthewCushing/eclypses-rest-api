import express, { Router } from "express";
import userRoute from "./routes/User.js";

const app = express();
const PORT = 3000;

const rootUserRoute = Router();

app.use("/api", rootUserRoute);
rootUserRoute.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
