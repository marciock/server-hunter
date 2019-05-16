const express = require('express');
const router = express.Router();
//const execPing=require('../lib/ping');

router.get('/', function(req, res, next) {
  //console.log(menu);
 
  res.render('ping/index');
});


module.exports = router;