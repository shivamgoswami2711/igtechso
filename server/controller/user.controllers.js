const {
  CatchAsyncError,
} = require("../middleware/catchasyncerror.middlewares.js");
const userModule = require("../module/userModule");
const ErrorHandler = require("../utils/ErrorHeandler");
const responseToken = require("../utils/responseToken");

// user creation
exports.newUser = CatchAsyncError(async (req, res, next) => {
  const email = req.body.email;
  req.body.email = email.toLowerCase();
  const user = await userModule.create(req.body);
  // get token and save

  res.status(200).json({
    success: true,
    message: `ragistretion successfully`,
    user 
  });
});

exports.login = CatchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  // qurey
  const user = await userModule.findOne({ email: email.toLowerCase() });
  // if uer not found
  if (!user) next(new ErrorHandler(404, "user not found"));
  // // password pamperetion
  const isPasswordMatch = await user.comperePassword(password);
  // // if password is worng
  if (!isPasswordMatch)
    next(new ErrorHeandler(400, "please enter vaild email and password"));

  // // if email not verifind

  req.user = user;
  // sending response
  responseToken(user, 200, res);
});
