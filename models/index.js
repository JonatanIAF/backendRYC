const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.database = require("../models/database.model.js")(sequelize, Sequelize);
//db.capturistRegister = require("../models/capturistRegister.model.js")(sequelize, Sequelize);
//db.imss2018 = require("../models/imss2018.model.js")(sequelize, Sequelize);
db.prospectos = require("../models/prospectos.model.js")(sequelize, Sequelize);
db.prospectonl = require("../models/prospectonl.model.js")(sequelize, Sequelize);
db.prospectovr = require("../models/prospectovr.model.js")(sequelize, Sequelize);
db.municipiosChiapas = require("../models/municipiosChiapas.model.js")(sequelize, Sequelize);
db.asistencias = require("../models/asistencias.model.js")(sequelize, Sequelize);
db.precliente = require("../models/pre-cliente.model.js")(sequelize, Sequelize);
db.ineChiapas12 = require("../models/ineChiapas12.model.js")(sequelize, Sequelize);
db.inenl= require("../models/inenl.model.js")(sequelize, Sequelize);
db.ineVeracruz2018= require("../models/ineVeracruz2018.model.js")(sequelize, Sequelize);
module.exports = db;