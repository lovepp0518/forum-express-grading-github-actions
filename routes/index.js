const express = require('express')
const router = express.Router()

// 載入 controller
const restController = require('../controllers/restaurant-controller')

// 載入 admin.js
const admin = require('./modules/admin')

// 載入 admin.js
router.use('/admin', admin)

// 載入 controller
router.get('/restaurants', restController.getRestaurants)

router.use('/', (req, res) => res.redirect('/restaurants'))

module.exports = router
