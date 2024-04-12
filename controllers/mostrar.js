const mostrar = {
  vistaPrincipal: (req, res) => {
    res.render("index");
  },
  vistaEror: (req, res) => {
    res.status(404).render("404");
  },
};

module.exports = mostrar;
