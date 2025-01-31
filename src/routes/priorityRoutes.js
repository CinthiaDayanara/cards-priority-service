const express = require("express");
const { setPriority } = require("../controllers/priorityController");

const router = express.Router();

router.put("/", setPriority);

module.exports = router;
