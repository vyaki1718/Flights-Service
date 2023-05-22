const { StatusCodes } = require("http-status-codes");
const info = (req, res) => {
 try {
  return res.status(StatusCodes.OK).json({
    success: true,
    massage: "API is live",
    error: {},
    data: {},
  });
 } catch (error) {
  return res.status(StatusCodes.OK).json({
    success: true,
    massage: "API is not live",
    error: {},
    data: {},
  });
 }
};

module.exports = {
  info,
};
