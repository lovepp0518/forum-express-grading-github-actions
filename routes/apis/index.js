const express = require('express')
const router = express.Router()
const passport = require('../../config/passport')
const upload = require('../../middleware/multer')

const admin = require('./modules/admin')

const restController = require('../../controllers/apis/restaurant-controller')
const userController = require('../../controllers/apis/user-controller')
const commentController = require('../../controllers/apis/comment-controller')

const { authenticated, authenticatedAdmin } = require('../../middleware/api-auth')
const { apiErrorHandler } = require('../../middleware/error-handler')

router.use('/admin', authenticated, authenticatedAdmin, admin)

router.post('/signup', userController.signUp)
router.post('/signin', passport.authenticate('local', { session: false }), userController.signIn)

router.put('/users/:id', authenticated, upload.single('image'), userController.putUser)
router.get('/restaurants', authenticated, restController.getRestaurants)
router.get('/restaurants/:id', authenticated, restController.getRestaurant)
router.post('/comments', authenticated, commentController.postComment)
router.post('/favorite/:restaurantId', authenticated, userController.addFavorite)
router.post('/following/:userId', authenticated, userController.addFollowing)
router.use('/', apiErrorHandler)
module.exports = router
