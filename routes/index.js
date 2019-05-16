const express = require('express');
const router = express.Router();
const menu=require('../lib/menu');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(menu);
  res.render('layouts/home',{menus:menu});
});

module.exports = router;
