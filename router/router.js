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
router.get("/cursos", mostrar.mostrarCursos);
router.get("/horario", mostrar.mostrarHorario);
// editar
router.get("/editarTarea/:id", editar.vistaEditarTarea);
router.get("/editarCurso/:id", editar.vistaEditarCurso);
// actualizar
router.post("/actualizarTarea", editar.actualizarTarea);
router.post("/actualizarCurso", editar.actualizarCurso);

// guardar o registrar
router.post("/guardarTarea", registrar.registrarTarea);
router.post("/guardarCurso", registrar.registrarCurso);
// eliminar
router.delete("/eliminarTarea/:id", eliminar.eliminarTarea);
router.delete("/eliminarCurso/:id", eliminar.eliminarCurso);
// Middleware para manejar errores
router.use(mostrar.vistaError);
module.exports = router;
