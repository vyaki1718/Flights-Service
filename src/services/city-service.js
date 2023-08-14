const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        if ((error.name == "SequelizeValidationError" || error.name == "SequelizeUniqueConstraintError")) {
            let explaination = [];
            error.errors.forEach((err) => {
                explaination.push(err.message);
            });

            throw new AppError(explaination, StatusCodes.BAD_REQUEST);
        }
        throw new AppError(
            "can not create new City object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function deleteCity(id) {
    try {
        const city = await cityRepository.destroy(id);
        return city;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError(
                "The City you requested to delete is not present",
                 StatusCodes.NOT_FOUND
            )
        }
        throw new AppError(
            "can not fetch the data of cities",
             StatusCodes.INTERNAL_SERVER_ERROR
        )

    }
}

async function updateCity(id, data) {
    try {
        const city = await cityRepository.update(id, data);
        return city;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError(
                "The City you requested to update is not present",
                StatusCodes.NOT_FOUND
            )
        }
        throw new AppError(
            "Can not fetch the data of cities",
            StatusCodes.INTERNAL_SERVER_ERROR
        )
    }
}

module.exports = {
    createCity,
    deleteCity,
    updateCity
}