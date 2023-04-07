const express = require('express')
const router = express.Router()
const CatController = require('./catcontroller')

router
.route('/topfriendly')
.get(CatController.topFriendly)

router
.route('/mostintelligent')
.get(CatController.mostIntelligent)

router
.route('/:breed')
.get(CatController.searchCat)

router
.route('/')
.get(CatController.getAllCats)
.post(CatController.createCat)

//router
//.route('/:id')




module.exports = router;