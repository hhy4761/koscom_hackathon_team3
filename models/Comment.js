module.exports = function (sequelize, DataTypes) {
    // 계좌
    let comment = sequelize.define(
      "Comment",
      {
        // PK_AutoIncrement
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        comment_content:{
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
        tableName: "Comment",
        charset: "utf8",
        underscored: true,
      }
    );
    comment.associate = models => {
       comment.belongsTo(models.User, {foreignKey: "user_id", sourceKey: "id", as: "comment_writer"});
       comment.belongsTo(models.Board, {foreignKey: "board_id", sourceKey: "id"});
    };
  
    return comment;
  };