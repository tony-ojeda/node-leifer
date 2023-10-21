const { check } = require("express-validator")
const validateResults = require('../utils/handleValidator')

const validatorLogin = [
  check('password')
  .exists()
  .notEmpty()
  .isLength({ min: 3, max: 15}),
  check('email')
  .exists()
  .notEmpty()
  .isEmail(),
  (req, res, next) => validateResults(req, res, next)
]

const validatorRegister = [
  check('name')
  .exists()
  .notEmpty()
  .isLength({ min: 3, max: 99}),
  check('password')
  .exists()
  .notEmpty()
  .isLength({ min: 3, max: 15}),
  check('email')
  .exists()
  .notEmpty()
  .isEmail(),
  check('age')
  .exists()
  .notEmpty()
  .isNumeric(),
  (req, res, next) => validateResults(req, res, next)
]

module.exports = { validatorRegister, validatorLogin }