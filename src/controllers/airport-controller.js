const { StatusCodes } = require("http-status-codes");
const { AirportService } = require("../services");

const { ErrorResponse, SuccessResponse } = require("../utils/common");

/***
 * post:/airports/
 * req.body. {}
 */
async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
            name:req.body.name,
            code:req.body.name,
            address:req.body.address,
            CityId:req.body.cityId
        });

        SuccessResponse.data = airport;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        console.log(error);
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirports(req, res) {
    try {
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/***
 * get:/airports/:id
 */
async function getAirport(req, res) {
    try {
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}
/***
 * delete:/airports/:id  destroy
 */

async function destroyAirport(req, res) {
    try {
        const airport = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

/**patch:/airports/:id */

async function updateAirport(req, res) {
    try {
        const airport = await AirportService.updateAirport(req.params.id, {
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        });
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;

        return res.status(error.statusCode).json(ErrorResponse);
    }
}
module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport,
};
