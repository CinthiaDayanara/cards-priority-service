const express = require("express");
const { getCards } = require("../controllers/priorityController");
const router = express.Router();

// Ruta GET para obtener todas las tarjetas
router.get("/", getCards);

module.exports = router;
