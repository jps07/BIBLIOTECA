var express = require('express');
var router = express.Router();
//se cambia ruta en index.
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('libros/index', { title: 'Aplicación' });
});

module.exports = router;
