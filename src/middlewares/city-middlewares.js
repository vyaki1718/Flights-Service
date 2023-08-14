const { StatusCodes } = require('http-status-codes')
const { ErrorResponse } = require('../utils/common')
function validateCreateRequest(req, res, next) {
    ErrorResponse.messege = "something went wrong while  creating  city";
    ErrorResponse.error = { explaination: ["City name  not found in oncoming request"] };
    if (!req.body.name) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next();
}


module.exports = {
    validateCreateRequest
}