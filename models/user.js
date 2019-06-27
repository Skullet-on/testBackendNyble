module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstname: DataTypes.STRING,
    lastName: DataTypes.STRING,
    image: DataTypes.BLOB('long'),
    pdf: DataTypes.BLOB('long')
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};