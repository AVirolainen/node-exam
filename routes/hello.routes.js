const {Router} = require('express')
const router = Router()
const request = require('request');

router.get(
    '/a', 
    async (req, res)=>{
    try {
        request('https://api.openweathermap.org/data/2.5/weather?q=London&appid='+process.env.MYAPIKEY, function(error, response, body) {
            res.send(body)
        });
    } catch(e) {
        res.status(500).json({message: "Something is wrong"})
    }
})

module.exports = router