'use strict';

function modal (DataTypes, sequelize){


    const Users = sequelize.define('User', {
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      });
    return Users
}

module.exports = modal