'use strict'

const { join } = require('path')
const chickData = require('../model/chicken')

const chickenNames = chickData.map(chicken => chicken.name)

module.exports.newPage = (req, res, err)=>
  res.sendFile(join(__dirname, '../public', `${req.url}.html`))

module.exports.submit = (req, res, err) => {
  console.log(`submit a form for ${req.url}`);
  res.send(`The chickens are ${chickenNames.join(' and ')}`)
}
