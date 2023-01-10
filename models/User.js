module.exports = (sequelize, DataTypes) => {

    let user = sequelize.define(
        "User",
        {
          // PK
          id:{
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
          },
          password:{
            type: DataTypes.STRING,
            allowNull: true,
          },
          isStudent:{
            type: DataTypes.ENUM, // 1: 입시생 2: 입시생 X
            values:[1,2],
            allowNull: true,
          },
          nickname:{
            type: DataTypes.STRING,
            allowNull: true,
          },
          name:{
            type: DataTypes.STRING,
            allowNull: true,
          },
          birthday:{
            type: DataTypes.STRING,
            allowNull: true,
          },
          univ:{
            type: DataTypes.STRING,
            allowNull: true,
          },
          major:{
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
          tableName: "User",
          charset: "utf8",
          underscored: true,
        }
      );

    user.associate = models => {
      /**
      * Users안에 있는 "id값"을 "user_id라는 컬럼 이름"으로 Board모델에 새로운 컬럼으로 추가한다.
      */
      user.hasMany(models.Board, {foreignKey: "user_id", sourceKey: 'id', as: "writer"});
      user.hasMany(models.Comment, {foreignKey: "user_id", sourceKey: 'id', as: "comment_writer"});
    };
  
    return user;
  };
