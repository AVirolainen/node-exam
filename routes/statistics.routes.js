const {Router} = require('express')
const router = Router()
const request = require('request');
const CityWeather = require('../models/CityWeather');
const Request = require('../models/Request');

router.post(
    '/:city/:period', 
    async (req, res)=>{
    try {
        const city = req.params.city;
        const period = req.params.period;

        res.send({message: "endpoint is working"})
    } catch(e) {
        res.status(500).json({message: "Something is wrong"})
    }
})

module.exports = router