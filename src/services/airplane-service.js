const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const airplaneReppository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneReppository.create(data);
        return airplane;
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
            "can not create new Airplane object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getAirplanes() {
    try {
        const airplanes = await airplaneReppository.getAll();
        console.log("all airplanes");
        return airplanes;
    } catch (error) {
        throw new AppError(
            "can not fetch the data of all airplanes",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function getAirplane(id) {
    try {
        const airplane = await airplaneReppository.get(id);
        return airplane;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError(
                "The airoplane you requested is not present",
                StatusCodes.NOT_FOUND
            );
        }
        throw new AppError(
            "can not fetch the data of  airplane",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function destroyAirplane(id) {
    try {
        const airplanes = await airplaneReppository.destroy(id);
        return airplanes;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError(
                "The airoplane you requested to delete is not present",
                StatusCodes.NOT_FOUND
            );
        }
        throw new AppError(
            "can not fetch the data of all airplanes",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

async function updateAirplane(id, data) {
    try {
        const airplane = await airplaneReppository.update(id, data);
        return airplane;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError(
                "The airoplane you requested to update is not present",
                StatusCodes.NOT_FOUND
            );
        }
        throw new AppError(
            "can not fetch the data of all airplanes",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}
module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane,
};
