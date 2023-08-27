const CrudRepository = require('./crud-repository');
const {Flight} =require("../models")


class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight)
    }
    async getAllFlights(filter,sort) {
        const resopnse = await Flight.findAll({
            where:filter,
            order:sort
        });
        return resopnse;
    }
}

module.exports=FlightRepository;