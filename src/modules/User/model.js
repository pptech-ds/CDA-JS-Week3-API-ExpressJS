import { Model, DataTypes } from "sequelize";
import db from "../../config/database";

class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      { sequelize, modelName: "user" }
    );
  }

  static associate(models) {
    // define association here
    console.log("User log", models);
    this.hasMany(models.comment, { foreignKey: "user_id" });
    return this;
  }
}

User.init(db.sequelize);

export default User;
