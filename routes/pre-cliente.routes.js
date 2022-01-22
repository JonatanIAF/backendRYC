const { authJwt } = require("../middleware");
const controller = require("../controllers/pre-cliente.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/preclientes/get/",
    controller.getPreClientes
  );

  app.post(
    "/api/preclientes/add/",
    controller.add
  );
};