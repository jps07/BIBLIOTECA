var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('libros/index', { title: 'Aplicación' });
});

module.exports = router;
