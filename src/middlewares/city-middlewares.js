const { StatusCodes } = require('http-status-codes')
const { ErrorResponse } = require('../utils/common')
function validateCreateRequest(req, res, next) {
    if (!req.body.name) {
        ErrorResponse.messege = "something went wrong while  creating  city";
        ErrorResponse.error = { explaination: ["City name  not found in oncoming request"] };
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next();
}


module.exports = {
    validateCreateRequest
}