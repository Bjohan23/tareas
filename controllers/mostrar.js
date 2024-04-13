const db = require("../db/db");
const mostrar = {
  vistaPrincipal: (req, res) => {
    db.query("SELECT * FROM tarea", (error, tareas, fields) => {
      if (error) throw error;
      db.query("SELECT * FROM curso", (error, curso, fields) => {
        if (error) throw error;
        res.render("index", { tareas: tareas, curso: curso });
      });
    });
  },
  vistaEror: (req, res) => {
    res.status(404).render("404");
  },
};

module.exports = mostrar;
