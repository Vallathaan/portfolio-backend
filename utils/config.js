const dotenv = require('dotenv');
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
const EMAIL = process.env.EMAIL;
const PASS = process.env.PASS;

module.exports = {
  MONGO_URI,
  PORT,
  EMAIL,
  PASS
}