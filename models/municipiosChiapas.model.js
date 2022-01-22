module.exports = (sequelize, Sequelize) => {
  const municipiosChiapas = sequelize.define("municipiosChiapas", {
    entidad: {
      type: Sequelize.INTEGER
    },
    nombreEntidad: {
      type: Sequelize.STRING
    },
    municipio: {
      type: Sequelize.STRING
    },
    nombreMunicipio: {
      type: Sequelize.STRING
    }
  });
  return municipiosChiapas;
};