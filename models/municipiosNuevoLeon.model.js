module.exports = (sequelize, Sequelize) => {
    const municipiosNuevoLeon = sequelize.define("municipiosNuevoLeon", {
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
    return municipiosNuevoLeon;
  };