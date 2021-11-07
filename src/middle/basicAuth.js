'use strict';
const base64 = require('base-64');


const basicAuth = (req, res, next) =>{

    let basicHeaderParts = req.headers.authorization.split(' '); 
    let encodedString = basicHeaderParts.pop(); 
    let decodedString = base64.decode(encodedString); 
    let [username, password] = decodedString.split(':'); 
  
    
   if(username === "" && password ===""){

    next(new Error('No inputs'))

   }else{
       req.headers.authorization = {
           ...req.headers.authorization,
           username,
           password
       }
       next()
   }
  
}

module.exports = basicAuth