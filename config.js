require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGO_URL || 'mongodb://localhost:27017/shop',
  SECRET_TOKEN: process.env.SECRET_TOKEN
}


//mongodb://localhost:27017/shop
