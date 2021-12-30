const {Router} = require('express')
const config = require('config')
const router = Router()

router.get(
    '/register', 
    async (req, res)=>{
    try {
        res.send({hello: "world"})
    } catch(e) {
        res.status(500).json({message: "Something is wrong"})
    }
})

module.exports = router