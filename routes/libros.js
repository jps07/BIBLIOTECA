var express = require('express');
var router = express.Router();
const librosController= require( "../controllers/librosController");
//se cambia ruta en index.


/* GET home page. */
router.get('/',librosController.index);
router.get('/crear',librosController.crear);
router.post('/crear',librosController.guardar);
module.exports = router;
