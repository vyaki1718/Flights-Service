const express = require("express");

const { InfoController } = require("../../controllers");

const airplaneRoutes = require("./airplane-routes");
const cityRoutes=require('./city-routes')
const aiportsRoutes=require('./aiport-routes')
const flightsRoutes=require('./flight-routes')


const router = express.Router();

//Airplane routes
router.use("/airplanes" , airplaneRoutes)
// router.post('/airplanes', AirplaneController.createAirplane)

//cities routes
router.use('/cities', cityRoutes);
router.use('/airports', aiportsRoutes);

//flights
router.use('/flights', flightsRoutes)

router.get("/info", InfoController.info);

module.exports = router;