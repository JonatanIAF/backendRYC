const controller = require("../controllers/prospectos.controller");

module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
          );
        next();
    });

    app.post(
        "/api/prospectos/add",
        controller.add
    );

    app.get(
        "/api/prospectos/find/:cond",
        controller.findByCond
    );

    app.put(
        "/api/prospectos/updatePrecalif/:id",
        controller.updatePrecalif
    );

    app.get(
        "/api/prospectos/getByRange/:inferior/:superior",
        controller.getByRange
    );

    app.get(
        "/api/prospectos/findAll/",
        controller.getAll
    );

    app.get(
        "/api/prospectos/getProspectCh/",
        controller.getProspectCh
    );


};
