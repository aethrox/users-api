import express, { json, urlencoded } from "express";
import morgan from "morgan";
import UserRoutes from "./routes/user.route.js";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev", ":method :url :status :res[content-length] - :response-time ms"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", UserRoutes)

export default app;

