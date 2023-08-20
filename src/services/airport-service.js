const { StatusCodes } = require("http-status-codes");
const { AirportRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try {
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
        // console.log(error)
        if ((error.name = "SequelizeValidationError")) {
            let explaination = [];
            error.errors.forEach((err) => {
                explaination.push(err.message);
            });

            throw new AppError(explaination, StatusCodes.BAD_REQUEST);
        }
        throw new AppError(
            "can not create new Airport object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getAirports() {
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError(
            "can not fetch the data of all Airports",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getAirport(id) {
    try {
        const airport = await airportRepository.get(id);
        return airport;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError(
                "The Airport you requested is not present",
                StatusCodes.NOT_FOUND
            );
        }
        throw new AppError(
            "can not fetch the data of  airport",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function destroyAirport(id) {
    try {
        const airport = await airportRepository.destroy(id);
        return airport;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError(
                "The Airport you requested to delete is not present",
                StatusCodes.NOT_FOUND
            );
        }
        throw new AppError(
            "can not fetch the data of all Airports",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function updateAirport(id, data) {
    try {
        const airport = await airportRepository.update(id, data);
        return airport;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError(
                "The Airport you requested to update is not present",
                StatusCodes.NOT_FOUND
            );
        }
        throw new AppError(
            "can not fetch the data of all Airport",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}
module.exports = {
    createAirport,
    getAirport,
    getAirports,
    destroyAirport,
    updateAirport,
};
