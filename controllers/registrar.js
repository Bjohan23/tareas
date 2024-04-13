const db = require("../db/db");

const registrar = {
  registrarTarea: (req, res) => {
    // Obtener los datos del formulario desde el cuerpo de la solicitud
    const { titulo, curso, fecha_limite, descripcion } = req.body;
    console.log("Datos de la tarea:", titulo, curso, fecha_limite, descripcion);

    // Insertar los datos en la base de datos
    const query =
      "INSERT INTO tarea (titulo, curso_id, fecha_limite, descripcion) VALUES (?, ?, ?, ?)";
    db.query(
      query,
      [titulo, curso, fecha_limite, descripcion],
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
};

module.exports = registrar;
