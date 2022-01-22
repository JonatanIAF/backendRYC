const controller = require("../controllers/asistencias.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/asistencias/create",
      controller.create
  );

  app.get(
    "/api/asistencias/get/:id",
      controller.findById
  );
  app.get(
    "/api/users/getBusinessDays/:idUsuario/:startDate/:endDate",
      controller.getBusinessDays
  );
};