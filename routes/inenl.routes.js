const controller = require("../controllers/inenl.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/db/inenl/get/direccion/:curp",
    controller.getDireccionNuevoLeon
  );

};