const { query } = require("express");
const db = require("../db/db");

const registrar = {
  registrarTarea: (req, res) => {
    // Obtener los datos del formulario desde el cuerpo de la solicitud
    const { titulo, fecha_limite, descripcion, curso_id } = req.body;
    console.log("Datos de la tarea:", titulo, fecha_limite, descripcion);

    // Insertar los datos en la base de datos
    const query =
      "INSERT INTO tarea (titulo, curso_id, fecha_limite, descripcion) VALUES (?, ?, ?, ?)";
    db.query(
      query,
      [titulo, curso_id, fecha_limite, descripcion],
      (err, result) => {
        if (err) {
          console.error("Error al guardar la tarea:", err);
          // Manejar el error adecuadamente, por ejemplo, redireccionando a una página de error
          res.status(500).send("Error interno del servidor");
        } else {
          console.log("Tarea guardada exitosamente");
          // Redireccionar a alguna página de éxito o renderizar una vista de éxito
          res.redirect("/");
        }
      }
    );
  },
  registrarCurso: (req, res) => {
    const { curso } = req.body;
    console.log("Datos del curso:", curso);
    const query = "INSERT INTO curso (nombre) VALUES (?)";
    db.query(query, [curso], (err, result) => {
      if (err) {
        console.error("Error al guardar el curso:", err);
        res.status(500).send("Error interno del servidor");
      }
      console.log("Curso guardado exitosamente");
      res.redirect("/");
    });
  },
};

module.exports = registrar;
