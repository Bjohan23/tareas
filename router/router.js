// router.js
const express = require("express");
const morgan = require("morgan");
const router = express.Router();
const mostrar = require("../controllers/mostrar");
const registrar = require("../controllers/registrar");
const eliminar = require("../controllers/eliminar");
const editar = require("../controllers/editar");

router.use(morgan("dev"));
router.use("views", express.static("views"));
// mostrar
router.get("/", mostrar.vistaPrincipal);
router.get("/editarTarea/:id", editar.vistaEditarTarea);
router.post("/actualizarTarea", editar.actualizarTarea);

// guardar o registrar
router.post("/guardarTarea", registrar.registrarTarea);
router.post("/guardarCurso", registrar.registrarCurso);
// eliminar
router.delete("/eliminarTarea/:id", eliminar.eliminarTarea);
// Middleware para manejar errores
router.use(mostrar.vistaError);
module.exports = router;
