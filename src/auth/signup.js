'use strict';
const express = require("express");
const userRoute = express.Router(); 
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Users } = require('../model/index');
const basicAuth = require('../middle/basicAuth')

userRoute.post('/signup', async (req, res) => {

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
});



userRoute.post('/signin', basicAuth, async (req, res) => {
  
  let {username, password} = req.headers.authorization; 
  
  
  try {
    const user = await Users.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      res.status(200).json(user);
    }
    else {
      throw new Error('Invalid User')
    }
  } catch (error) { res.status(403).send("Invalid Login"); }
  
  });

  module.exports = userRoute;