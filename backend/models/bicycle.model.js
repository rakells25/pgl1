module.exports = (sequelize, Sequelize) => {
    const Bicycle = sequelize.define ("producto", {
      idproducto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
     },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false    
      },

      descripcion: {
        type: Sequelize.STRING
      },

      img: {
        type: Sequelize.STRING
      }
    },{timestamp: false});

    return Bicycle;
};