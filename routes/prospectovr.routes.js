const { authJwt } = require("../middleware");
const controller = require("../controllers/prospectovr.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/prospectosvr/add/",
    controller.add
  );


  app.get(
    "/api/prospectosvr/find/:cond",
    controller.findByCond
  );

  app.put(
    "/api/prospectosvr/updatePrecalif/:id",
    controller.updatePrecalif
  );

  app.get(
    "/api/prospectosvr/getByRange/:inferior/:superior",
    controller.getByRange
  );

  app.get(
    "/api/prospectosvr/findAll/",
    controller.getAll
  );
  
  app.get(
    "/api/prospectosvr/getProspectVR/",
    controller.getProspectVR
  );
  
};