module.exports = (sequelize, Sequelize) => {
  const Prospectovr = sequelize.define("prospectosvr", {
    superId: {
      type: Sequelize.INTEGER
    },
    nombre: {
      type: Sequelize.STRING
    },
    curp: {
      type: Sequelize.STRING
    },
    nss: {
      type: Sequelize.STRING
    },
    fechaNacimiento: {
      type: Sequelize.STRING
    },
    montolinea4: {
      type: Sequelize.FLOAT
    },
    montolinea2: {
      type: Sequelize.FLOAT
    },
    descMensual: {
      type: Sequelize.FLOAT
    },
    aplica: {
      type: Sequelize.STRING
    },
    excepcion: {
      type: Sequelize.STRING
    },
    precalif: {
      type: Sequelize.BOOLEAN
    },
    direccion: {
      type: Sequelize.STRING
    },
    anotacion: {
      type: Sequelize.STRING
    },
  },{
  freezeTableName: true
  });
  return Prospectovr;
};