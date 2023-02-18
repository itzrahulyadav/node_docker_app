const express = require("express")

const router = express.Router()

const getJokes = require("../controllers/jokes")

router.get("/",getJokes.getDarkJokes)

module.exports = router