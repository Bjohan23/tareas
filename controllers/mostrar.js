const sql = require("../db/db.js");

const mostrar = {
  vistaPrincipal: async (req, res) => {
    try {
      let tareas = await sql`SELECT * FROM tarea`;
      const curso = await sql`SELECT * FROM curso`;

      // Ordenar las tareas por fecha
      tareas = tareas.sort(
        (a, b) => new Date(a.fecha_limite) - new Date(b.fecha_limite)
      );

      res.render("tarea", { tareas: tareas, curso: curso });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send("Hubo un error al obtener los datos de la base de datos");
    }
  },
  mostrarCursos: async (req, res) => {
    try {
      const cursos = await sql`SELECT * FROM curso`;

      res.render("curso", { cursos: cursos });
      console.log(cursos);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send("Hubo un error al obtener los datos de la base de datos");
    }
  },
  mostrarHorario: (req, res) => {
    res.render("horario");
  },
  vistaError: (req, res) => {
    res.status(404).render("404");
  },
};

module.exports = mostrar;
