// router.js
const express = require("express");
const morgan = require("morgan");
const router = express.Router();
const mostrar = require("../controllers/mostrar");

router.use(morgan("dev"));
router.use("views", express.static("views"));

router.get("/", mostrar.vistaPrincipal);
// Middleware para manejar errores
router.use(mostrar.vistaEror);
module.exports = router;
