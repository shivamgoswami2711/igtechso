const app = require("./app");
const dotenv = require("dotenv");
const database = require("./DB/database");
const cloudinary = require("cloudinary");


process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});


if (process.env.NODE_ENV !== "Production") {
  dotenv.config({ path: "./config/config.env" });
}

// data base conection
database();


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true,
  });


// servar lition
app.listen(process.env.PORT, () =>
  console.log(`server started http://localhost:${process.env.PORT}`)
);


// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});