const {Router} = require('express')
const router = Router()
const request = require('request');
const CityWeather = require('../models/CityWeather');

router.post(
    '/:city', 
    async (req, res)=>{
    try {
        if(!req.body.length) return res.send({message: "City has not been posted because of post"});

        request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`+process.env.MYAPIKEY, async function(error, response, body) {
            const info = JSON.parse(body)
            const cityWeather = new CityWeather({city: info.name, info: {a: "1"}})
            if(!cityWeather){
                res.send({message: "City was already"})
            }
            await cityWeather.save()
            res.send({message: "City has been saved"})
        });
        
    } catch(e) {
        res.status(500).json({message: "Something is wrong"})
    }
})

// router.get(
//     '/a', 
//     async (req, res)=>{
//     try {
//         if(!req.body.length) return res.send({message: "City has not been posted because of post"});

//         const {a, b} = req.body;
//         console.log(req.body)

//         // request('https://api.openweathermap.org/data/2.5/weather?q=London&appid='+process.env.MYAPIKEY, async function(error, response, body) {
//         //     const info = JSON.parse(body)
//         //     const cityWeather = new CityWeather({city: info.name, info: {a: "1"}})

//         //     if(!cityWeather){
//         //         res.send({message: "City was already"})
//         //     }

//         //     await cityWeather.save()
//         //     res.send({message: "City has been saved"})
//         // });
//         res.send({message: "City has been posted"})
        
//     } catch(e) {
//         res.status(500).json({message: "Something is wrong"})
//     }
// })

// router.delete(
//     '/a', 
//     async (req, res)=>{
//     try {
//         // request('https://api.openweathermap.org/data/2.5/weather?q=London&appid='+process.env.MYAPIKEY, async function(error, response, body) {
//         //     const info = JSON.parse(body)
//         //     const cityWeather = new CityWeather({city: info.name, info: {a: "1"}})
//         //     await cityWeather.save()

//         //     res.send({message: "City has been saved"})
//         // });
//         await CityWeather.deleteOne({city: "London"})

//         res.send({message: "Delete route has been called"})
//     } catch(e) {
//         res.status(500).json({message: "Something is wrong"})
//     }
// })

// router.put(
//     '/a', 
//     async (req, res)=>{
//     try {

//         if(!req.body.length) return res.send({message: "City has not been posted because of post"});

//         const {a, b} = req.body;
//         console.log(req.body)


//         // request('https://api.openweathermap.org/data/2.5/weather?q=London&appid='+process.env.MYAPIKEY, async function(error, response, body) {
//         //     const info = JSON.parse(body)
//         //     const cityWeather = new CityWeather({city: info.name, info: {a: "1"}})

//         //     if(!cityWeather){
//         //         res.send({message: "City was already"})
//         //     }

//         //     await cityWeather.save()
//         //     res.send({message: "City has been saved"})
//         // });
//         res.send({message: "City has been puted"})
        
//     } catch(e) {
//         res.status(500).json({message: "Something is wrong"})
//     }
// })

module.exports = router