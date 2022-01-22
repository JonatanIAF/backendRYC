module.exports = (sequelize, Sequelize) => {
  const ineChiapas12 = sequelize.define("ineChiapas12", {
    cve: {
      type: Sequelize.STRING
    },
    edad: {
      type: Sequelize.STRING
    },
    paterno: {
      type: Sequelize.STRING
    },
    materno: {
      type: Sequelize.STRING
    },
    fechanac: {
      type: Sequelize.STRING
    },
    sexo: {
      type: Sequelize.STRING
    },
    calle: {
      type: Sequelize.STRING
    },
    int: {
      type: Sequelize.STRING
    },
    ext: {
      type: Sequelize.STRING
    },
    colonia: {
      type: Sequelize.STRING
    },
    cp: {
      type: Sequelize.STRING
    },
    e: {
      type: Sequelize.STRING
    },
    d: {
      type: Sequelize.STRING
    },
    m: {
      type: Sequelize.STRING
    },
    s: {
      type: Sequelize.STRING
    },
    l: {
      type: Sequelize.STRING
    },
    mza: {
      type: Sequelize.STRING
    },
    consec: {
      type: Sequelize.STRING
    },
    cred: {
      type: Sequelize.STRING
    },
    folio: {
      type: Sequelize.STRING
    },
    nac: {
      type: Sequelize.STRING
    },
    curp: {
      type: Sequelize.STRING
    },
  },{
  freezeTableName: true
  });
  return ineChiapas12;
};