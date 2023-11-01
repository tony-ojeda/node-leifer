const { handleHttpError } = require('../utils/handleError')
const { varifyToken, verifyToken } = require('../utils/handleJwt')
const { usersModel } = require("../models")

const authMIddleware = async (req, res, next) => {
  try {
    if(!req.headers.authorization) {
      handleHttpError(res, "NOT_TOKEN", 401)
      return
    }
    const token = req.headers.authorization.split(' ').pop()
    const dataToken = await verifyToken(token)

    if(!dataToken._id) {
      handleHttpError(res, "ERROR_ID_TOKEN", 401)
      return
    }

    const user = await usersModel.findById(dataToken._id)
    req.user = user

    next()

  } catch (error) {
    console.log(error)
    handleHttpError(res, "NOT_SESSION", 401)
  }
}

module.exports = authMIddleware