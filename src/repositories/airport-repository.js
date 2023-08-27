const CrudRepository = require('./crud-repository');
const { Airport } = require("../models");
const { where } = require('sequelize');


class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport)
    }
    
}

module.exports = AirportRepository;