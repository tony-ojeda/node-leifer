const { matchedData } = require('express-validator')
const { tracksModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

/**
 * Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({})
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEMS")
  }
}

/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {}

/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
  try {
    // matcheData: limpia el body de acuerdo a los campos especificados en el validator
    const body = matchedData(req)
    const data = await tracksModels.create(body)
    
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEMS")
  }
}

/**
 * Actualizar un registo
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {}

/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {}


module.exports = { getItems, getItem, createItem, updateItem, deleteItem }