const { StatusCodes } = require('http-status-codes')
const { ErrorResponse } = require('../utils/common')
function validateCreateRequest(req, res, next) {
    if (!req.body.name) {
        ErrorResponse.messege = "something went wrong while  creating  airplane";
        ErrorResponse.error = { explaination: ["name not found in oncoming request"] };
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.code) {
        ErrorResponse.messege = "something went wrong while  creating  airplane";
        ErrorResponse.error = { explaination: ["code not found in oncoming request"] };
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if (!req.body.cityId) {
        ErrorResponse.messege = "something went wrong while  creating  airplane";
        ErrorResponse.error = { explaination: ["cityId not found in oncoming request"] };
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next();
}


module.exports = {
    validateCreateRequest
}