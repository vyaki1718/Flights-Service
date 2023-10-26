const CrudRepository = require('./crud-repository');
const { Flight, airplane, Airport, City } = require("../models");
const { Sequelize } = require('sequelize')
const db = require('../models')
const {addRowLockOnFlights} = require('./queries');

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight)
    }
    async getAllFlights(filter, sort) {
        const resopnse = await Flight.findAll({
            where: filter,
            order: sort,
            include: [
                {
                    model: airplane,
                    required: true,
                    as: "airplaneDetails"
                },
                {
                    model: Airport,
                    as: "departureAirport",
                    required: true,
                    on: {
                        col1: Sequelize.where(Sequelize.col('Flight.departureAirportId'), "=", Sequelize.col('departureAirport.code'))
                    },
                    include: { model: City, as: 'cityDetails', }
                },
                {
                    model: Airport,
                    as: "arrivalAirport",
                    required: true,
                    on: {
                        col1: Sequelize.where(Sequelize.col('Flight.arrivalAirportId'), "=", Sequelize.col('arrivalAirport.code'))
                    },
                    include: { model: City, as: 'cityDetails', }
                }
            ]



        });
        // console.log('res', resopnse)
        return resopnse;
    }

    async updateRemainingSeats(flightId, seats, dec=true){
        await db.sequelize.query(addRowLockOnFlights(flightId))
        const flight = await Flight.findByPk(flightId)
        if(+dec){
            await flight.decrement('totalSeat', {by:seats});
        }else{
             await flight.increment('totalSeat', {by:seats});
        }

        await flight.save();
        return flight;
    }
}

module.exports = FlightRepository;