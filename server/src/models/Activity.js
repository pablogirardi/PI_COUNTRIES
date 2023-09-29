const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("Activity", {
    ID: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    season: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
