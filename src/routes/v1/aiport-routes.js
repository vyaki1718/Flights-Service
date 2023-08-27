const express = require('express');

const {AirportController} = require('../../controllers')
const {AirportMiddlewares}=require('../../middlewares')

const router=express.Router();

// /api/v1/airports post
router.post('/', 
             AirportMiddlewares.validateCreateRequest,
             AirportController.createAirport);

// /api/v1/airports get
router.get('/', AirportController.getAirports);

// /api/v1/airports/:id get
router.get('/:id', AirportController.getAirport);

// /api/v1/aiports/:id delete
router.delete('/:id', AirportController.destroyAirport);

// /api/v1/airports/:id patch
router.patch('/:id', AirportController.updateAirport);

module.exports= router;


