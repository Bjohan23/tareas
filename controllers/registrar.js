const sql = require("../db/db.js");

const registrar = {
  registrarTarea: async (req, res) => {
    try {
      const { titulo, fecha_limite, descripcion, curso_id } = req.body;
      console.log("Datos de la tarea:", titulo, fecha_limite, descripcion);

      await sql`INSERT INTO tarea (titulo, curso_id, fecha_limite, descripcion) VALUES (${titulo}, ${curso_id}, ${fecha_limite}, ${descripcion})`;

      console.log("Tarea guardada exitosamente");
      res.redirect("/");
    } catch (error) {
      console.error("Error al guardar la tarea:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
  registrarCurso: async (req, res) => {
    try {
      const { curso } = req.body;
      console.log("Datos del curso:", curso);

      await sql`INSERT INTO curso (nombre) VALUES (${curso})`;

      console.log("Curso guardado exitosamente");
      res.redirect("/");
    } catch (error) {
      console.error("Error al guardar el curso:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
};

module.exports = registrar;
