module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    // email: {
    //   type: DataTypes.INTEGER,
    //   unique: true,
    //   allowNull: false,
    // },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  var bcrypt = require('bcrypt');
  User.beforeCreate((user, options) => {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(user.password, salt);
  });


  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };


  return User;

};

