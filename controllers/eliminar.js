const sql = require("../db/db.js");

const eliminar = {
  eliminarTarea: async (req, res) => {
    try {
      const { id } = req.params;
      console.log("ID de la tarea:", id);

      await sql`DELETE FROM tarea WHERE id = ${id}`;
      res.status(200).send("Tarea eliminada correctamente");
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
};

module.exports = eliminar;
