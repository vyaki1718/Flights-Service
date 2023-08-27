const { StatusCodes } = require('http-status-codes')
const { ErrorResponse } = require('../utils/common')
function validateCreateRequest(req, res, next) {
    if (!req.body.modelNumber) {
        ErrorResponse.messege = "something went wrong while  creating  airplane";
        ErrorResponse.error = { explaination: ["modelNumber not found in oncoming request"] };
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next();
}


module.exports = {
    validateCreateRequest
}