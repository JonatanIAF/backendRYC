const { authJwt } = require("../middleware");
const controller = require("../controllers/database.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get(
    "/api/database/:name",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.findIndexDatabase
  );

  app.post(
    "/api/database/",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.register
  );
  app.put(
    "/api/database/:id",
    
    controller.update
  );

};