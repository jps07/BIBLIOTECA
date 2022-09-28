var express = require('express');
var router = express.Router();
const librosController= require( "../controllers/librosController");
//aca se mostraria el log in.
//se cambia ruta en index.
/* GET home page. */
router.get('/',function (req,res,next) {
    res.send("Bienvenido a la biblioteca")
});

module.exports = router;
