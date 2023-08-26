const express =require('express');

const {FlightController} = require('../../controllers')
const {FlightMiddlewares}=require('../../middlewares')

const router=express.Router();

// router.post('/', AirplaneController.createAirplane);

// /api/v1/flights post
router.post('/', FlightMiddlewares.validateCreateRequest, FlightController.createFlight);


module.exports=router;