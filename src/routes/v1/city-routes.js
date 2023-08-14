const express =require('express');

const {CityController}= require('../../controllers');
const {CityMiddlewares}=require('../../middlewares')

const router=express.Router();

//api/v1/cities post

router.post('/', CityMiddlewares.validateCreateRequest,CityController.createCity);

//api/v1/cities/:id Delete

router.delete('/:id', CityController.deleteCity)

//api/v1/cities/:id PATCH
router.patch('/:id', CityController.updateCity);
module.exports=router;