module.exports = (sequelize, Sequelize) => {
  const Asistencias = sequelize.define("asistencias", {
    idUsuario: {
      type: Sequelize.INTEGER
    },
    data:{
      type: Sequelize.JSONB
    }
  });
  return Asistencias;
};