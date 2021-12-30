const {Router} = require('express')
const router = Router()
const request = require('request');
const CityWeather = require('../models/CityWeather');
const Request = require('../models/Request');


router.post(
    '/:city', 
    async (req, res)=>{
    try {
        const city = req.params.city;

        const newRequest = new Request({city, date: new Date()})
        await newRequest.save()

        request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`+process.env.MYAPIKEY, async function(error, response, body) {
            const info = JSON.parse(body)

            const candidate = await CityWeather.findOne({city: info.name})
            if(candidate){
                const hours = (new Date().getHours()) - (new Date(candidate.dateAdded).getHours())
                if(hours<2){
                    res.send(candidate.info)
                }
                else{
                    await CityWeather.updateOne(candidate, {$set: {dateAdded: new Date(), info: info.main}})
                    res.send({message: "City has been updated"})
                }
            }
            else{
                const cityWeather = new CityWeather({city: info.name, dateAdded: new Date(), info: info.main})
                await cityWeather.save()
                res.send({message: "City has been saved"})
            }

        });
        
    } catch(e) {
        res.status(500).json({message: "Something is wrong"})
    }
})

module.exports = router