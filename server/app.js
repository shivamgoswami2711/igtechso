const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const ErrorModdelWare = require("./middleware/error.middlewares.JS");
var cookies = require("cookie-parser");
const app = express();

const userRouter = require("./routes/user.routes.Js");
const reviewRouter = require("./routes/review.routes.js");
const path = require("path");

app.use(cookies());
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(
  cors({
    origin: "http://localhost:3001",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow cookies to be sent
  })
);

app.use("/v1/api/user", userRouter);
app.use("/v1/api/review", reviewRouter);

app.use(express.static(path.join(__dirname, "../client/build")));

app.use(ErrorModdelWare);

app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

module.exports = app;
