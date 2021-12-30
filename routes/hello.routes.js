const {Router} = require('express')
const router = Router()
const request = require('request');
const CityWeather = require('../models/CityWeather');

router.get(
    '/a', 
    async (req, res)=>{
    try {
        request('https://api.openweathermap.org/data/2.5/weather?q=London&appid='+process.env.MYAPIKEY, async function(error, response, body) {
            const info = JSON.parse(body)
            const cityWeather = new CityWeather({city: info.name, info: {a: "1"}})
            await cityWeather.save()

            res.send({message: "City has been saved"})
        });
        
    } catch(e) {
        res.status(500).json({message: "Something is wrong"})
    }
})

router.post(
    '/a', 
    async (req, res)=>{
    try {

        if(!req.body) return res.sendStatus(400);
        
        request('https://api.openweathermap.org/data/2.5/weather?q=London&appid='+process.env.MYAPIKEY, async function(error, response, body) {
            const info = JSON.parse(body)
            const cityWeather = new CityWeather({city: info.name, info: {a: "1"}})
            await cityWeather.save()

            res.send({message: "City has been saved"})
        });
        
    } catch(e) {
        res.status(500).json({message: "Something is wrong"})
    }
})

router.delete(
    '/a', 
    async (req, res)=>{
    try {
        request('https://api.openweathermap.org/data/2.5/weather?q=London&appid='+process.env.MYAPIKEY, async function(error, response, body) {
            const info = JSON.parse(body)
            const cityWeather = new CityWeather({city: info.name, info: {a: "1"}})
            await cityWeather.save()

            res.send({message: "City has been saved"})
        });
        
    } catch(e) {
        res.status(500).json({message: "Something is wrong"})
    }
})

router.put(
    '/a', 
    async (req, res)=>{
    try {

        if(!req.body) return res.sendStatus(400);

        request('https://api.openweathermap.org/data/2.5/weather?q=London&appid='+process.env.MYAPIKEY, async function(error, response, body) {
            const info = JSON.parse(body)
            const cityWeather = new CityWeather({city: info.name, info: {a: "1"}})
            await cityWeather.save()

            res.send({message: "City has been saved"})
        });
        
    } catch(e) {
        res.status(500).json({message: "Something is wrong"})
    }
})

module.exports = router