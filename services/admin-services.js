const { Restaurant, Category } = require('../models')

const adminController = {

  getRestaurants: (req, cb) => {
    Restaurant.findAll({
      raw: true,
      nest: true,
      include: [Category]
    })
      .then(restaurants => {
        const data = restaurants
        return cb(null, { restaurants: data })
      })
      .catch(err => next(err))
  }
}

module.exports = adminController
