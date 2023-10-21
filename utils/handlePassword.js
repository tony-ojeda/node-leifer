const bcrypt = require('bcryptjs')

/**
 * Contraseña sin excriptar
 * @param {*} passwordPlain 
 * @returns 
 */
const encrypt = async (passwordPlain) => {
  const hash = await bcrypt.hash(passwordPlain, 10)
  return hash
}

/**
 * Pasar contraseña sin ecriptar y pasar contraseña encriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword)
}

module.exports = { encrypt, compare}