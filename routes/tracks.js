const express = require("express")
const router = express.Router()
const authMiddleware = require('../middleware/session')
const checkRol = require('../middleware/rol')

const { validatorCreateItem, validatorGetItem } = require('../validators/tracks')
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks")

/**
 * Lista los items
 */
router.get("/", authMiddleware, getItems)
/**
 * Obtener detalle del item
 */
router.get('/:id', validatorGetItem, getItem)
/**
 * Crear un registro
 */
router.post("/", authMiddleware, checkRol(['admin']), validatorCreateItem, createItem)
/**
 * Actualizar un registro
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem )
/**
 * Elminar un registro
 */
router.delete("/:id", validatorGetItem, deleteItem )

module.exports = router