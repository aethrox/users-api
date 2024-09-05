import express, { json, urlencoded } from "express";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import UserRoutes from "./routes/user.route.js";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./swagger.js";

const app = express();

const accessLogStream = fs.createWriteStream(path.join(path.resolve(), "access.log"), { flags: "a" });

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec, { customCss: ".swagger-ui .topbar { display: none }", }));

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev", ":method :url :status :res[content-length] - :response-time ms"));
app.use(morgan("combined", { stream: accessLogStream }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", UserRoutes)

export default app;

