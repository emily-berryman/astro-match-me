const express = require('express')
const router = express.Router()

const { getTokenDecoder } = require('authenticare/server')

const db = require('../db/users')

module.exports = router

// GET /api/v1/users
router.get('/register', (req, res) => {
    // try {
    //   db.getFruits().then(fruits => {
    //      res.json({ fruits }) 
    //   })
    // } catch (err) {
    //   res.status(500).send(err.message)
    // }
    res.render('Register')
  })