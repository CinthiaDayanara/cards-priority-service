const express = require("express");
const { getAllCards } = require("../controllers/priorityController");
const router = express.Router();

// Ruta GET para obtener todas las tarjetas
router.get("/", getAllCards);

module.exports = router;
