'use strict';

// 3rd Party Resources
const express = require('express');
const app = express();

const {sequelize} = require('./model/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const userRoute = require('./auth/signup');

app.use(userRoute);


function start(){
    sequelize.sync()
      .then(() => {
        app.listen(3000, () => console.log(`server up: ${3000}`));
      }).catch(e => {
        console.error('Could not start server', e.message);
      });
}

module.exports = {
    server: app,
    start: start
};
