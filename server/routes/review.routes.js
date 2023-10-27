const express = require("express");
const loginRouter = express.Router();
const { isAuthUser } = require("../middleware/auth.middlewares");
const { singleUpload } = require("../middleware/multer.middlewares");

const {
  newReview,
  getAllReview,
  updateReview,
  deleteReview,
  getOneReview,
  getNumberOfRating
} = require("../controller/review.controllers");

loginRouter.route("/new").post(singleUpload, isAuthUser, newReview);
loginRouter.route("/rating").get(getNumberOfRating);
loginRouter
  .route("/:id")
  .get(isAuthUser, getOneReview)
  .patch(singleUpload, isAuthUser, updateReview)
  .delete(isAuthUser, deleteReview);
loginRouter.route("/").get(getAllReview);

module.exports = loginRouter;
