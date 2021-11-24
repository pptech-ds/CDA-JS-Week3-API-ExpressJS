import { Model, DataTypes } from "sequelize";
import db from "../../config/database";

class Comment extends Model {
  static init(sequelize) {
    return super.init(
      {
        startTime: DataTypes.DATE,
        endTime: DataTypes.DATE,
      },
      { sequelize, modelName: "comment" }
    );
  }

  static associate(models) {
    // define association here
    console.log("Comment log", models);
    this.belongsTo(models.user, { foreignKey: "user_id" });
    // or this.hasOne(...) depends your relations
    return this;
  }
}

Comment.init(db.sequelize);

export default Comment;
