'use strict';
const model = require('./user.model')
require("dotenv").config();
const { Sequelize, DataTypes } = require('sequelize');
const modal = require('./user.model');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/');

const Users = model(DataTypes, sequelize)

module.exports = {
    sequelize,
    Users}
