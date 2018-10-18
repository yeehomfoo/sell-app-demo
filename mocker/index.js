let { seller, goods, ratings } = require('./data.json')

const proxy = {
  'GET /api/v1/seller': (req, res) => {
    res.send({
      errno: 0,
      data: seller
    })
  },
  'GET /api/v1/goods': {
    errno: 0,
    data: goods
  },
  'GET /api/v1/ratings': {
    errno: 0,
    data: ratings
  }
}
module.exports = proxy
