const sql = require("../db/db.js");

const mostrar = {
  vistaPrincipal: async (req, res) => {
    try {
      const tareas = await sql`SELECT * FROM tarea`;
      const curso = await sql`SELECT * FROM curso`;

      res.render("index", { tareas: tareas, curso: curso });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send("Hubo un error al obtener los datos de la base de datos");
    }
  },
  vistaError: (req, res) => {
    res.status(404).render("404");
  },
};

module.exports = mostrar;
