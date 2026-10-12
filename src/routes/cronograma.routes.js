
const express = require("express");
const router = express.Router();

const cronogramaController = require("../controllers/cronograma.controller");

router.get("/", cronogramaController.consultar);

module.exports = router;
