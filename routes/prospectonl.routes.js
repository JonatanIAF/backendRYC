const { authJwt } = require("../middleware");
const controller = require("../controllers/prospectonl.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/prospectosnl/add/",
    controller.add
  );


  app.get(
    "/api/prospectosnl/find/:cond",
    controller.findByCond
  );

  app.put(
    "/api/prospectosnl/updatePrecalif/:id",
    controller.updatePrecalif
  );

  app.get(
    "/api/prospectosnl/getByRange/:inferior/:superior",
    controller.getByRange
  );

  app.get(
    "/api/prospectosnl/findAll/",
    controller.getAll
  );
  
  app.get(
    "/api/prospectosnl/getProspectNL/",
    controller.getProspectNL
  );


};