const express =require('express');

const {FlightController} = require('../../controllers')
const {FlightMiddlewares}=require('../../middlewares')

const router=express.Router();

// router.post('/', AirplaneController.createAirplane);

// /api/v1/flights post
router.post('/', FlightMiddlewares.validateCreateRequest, FlightController.createFlight);

//api/v1/flights?trips=MUM-PUN get
router.get('/', FlightController.getAllFlight);

router.get('/:id', FlightController.getFlight);


// /api/v1/flights/:id/seats patch
router.patch('/:id/seats',
        FlightMiddlewares.validateUpdateSeatsRequest, 
        FlightController.upadateSeats
);


module.exports=router;