const {
  CatchAsyncError,
} = require("../middleware/catchasyncerror.middlewares");
const reviewModule = require("../module/reviewModule");
const dataUri = require("../utils/dataUri");
const cloudinary = require("cloudinary");
const Crud = require("../utils/crud");

exports.newReview = CatchAsyncError(async (req, res, next) => {
  req.body.user = req.user._id;
  const review = await reviewModule.create(req.body);
  let updatedData;
  if (req.file != undefined) {
    // create data uri for file buffer
    const fileUri = dataUri(req.file);
    // upload file
    const dataURL = await cloudinary.v2.uploader.upload(fileUri.content);
    // add url
    updatedData = await reviewModule.findByIdAndUpdate(
      review._id,
      {
        images: { image_id: dataURL.asset_id, image_url: dataURL.secure_url },
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
  }

  res.status(201).json({
    message: "success",
    data: updatedData ? updatedData : review,
  });
});

exports.getAllReview = CatchAsyncError(async (req, res, next) => {
  const query = req.query;
  await new Crud(reviewModule, req, res, next).getAlldata({
    ...query,
  });
});

exports.getOneReview = CatchAsyncError(async (req, res, next) => {
  const data = await reviewModule.findById(req.params.id);

  if (!data) {
    return next(new ErrorHeandler(404, "review not found"));
  }

  res.status(201).json({
    message: "success",
    data,
  });
});

exports.getNumberOfRating = CatchAsyncError(async (req, res, next) => {
  const data = await reviewModule.aggregate([
    {
      $group: {
        _id: "$course",
        rating: { $sum: "$rating" },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);

  if (!data) {
    return next(new ErrorHeandler(404, "review not found"));
  }
  res.status(201).json({
    message: "success",
    data,
  });
});

exports.updateReview = CatchAsyncError(async (req, res, next) => {
  const review = await reviewModule.findById(req.params.id);
  if (!review) next(new ErrorHandler(404, "review not found"));
  if (req.file != undefined) {
    // create data uri for file buffer
    const fileUri = dataUri(req.file);
    // upload file
    const dataURL = await cloudinary.v2.uploader.upload(fileUri.content);
    // add url
    updatedData = await reviewModule.findByIdAndUpdate(
      req.params.id,
      {
        images: { image_id: dataURL.asset_id, image_url: dataURL.secure_url },
        ...req.body,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    res.status(201).json({
      message: "success",
      data: updatedData,
    });
  } else {
    await new Crud(reviewModule, req, res, next).update();
  }
});

exports.deleteReview = CatchAsyncError(async (req, res, next) => {
  await new Crud(reviewModule, req, res, next).delete("review");
});
