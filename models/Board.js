const Sequelize = require('sequelize')

module.exports = function (sequelize, DataTypes) {
    // 계좌
    let board = sequelize.define(
      "Board",
      {
        // PK_AutoIncrement
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        title:{
          type: DataTypes.STRING,
          allowNull: true,
        },
        content:{
          type: DataTypes.TEXT('long'),
          allowNull: true,
        },
        type:{
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        timestamps: true ,
        createdAt : "created_at",
        updatedAt : "updated_at"
      },
      {
        tableName: "Board",
        charset: "utf8",
        underscored: true,
      },
    );
    board.associate = models => {
       board.belongsTo(models.User, {foreignKey: "user_id", sourceKey: "id", as: "writer"});
       board.hasMany(models.Comment, {foreignKey: "board_id", sourceKey: 'id'});
    };
  
    return board;
  };