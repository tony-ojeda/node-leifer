const customHeader = (req, res, next) => {
  try {
    const apiKey = req.headers.api_key
    if ( apiKey === 'tony-ojeda') next()
    else {
      res.status(403)
      res.send({ error: 'API_KEY_NO_ES_CORRECTA' })
    }
  } catch (error) {
    res.status(403)
    res.send({ error: 'ALGO_OCURRIO_EN_EL_CUSTOM_HEADER'})
  }
  
  next()
}

module.exports = customHeader