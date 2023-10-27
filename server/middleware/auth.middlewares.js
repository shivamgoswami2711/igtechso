const Jwt = require("jsonwebtoken");
const userModule = require("../module/userModule");
const ErrorHandler = require("../utils/ErrorHeandler");
const { CatchAsyncError } = require("./catchasyncerror.middlewares");

exports.isAuthUser = CatchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    return next(new ErrorHandler(401, "Please Login to Access this Resource."));

  const decodedData = Jwt.verify(token, process.env.JWT_SECRET);
  const user = await userModule.findById(decodedData.id);

  // add user
  req.user = user;
  next();
});

