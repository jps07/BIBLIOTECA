// importa la conexion 
var con = require('../config/conexion');

module.exports={

    
    index: function (req, res) {

        con.query("SELECT * FROM libros", function (err, datos) {
            console.log(datos);
        });

        res.render('libros/index', { title: 'Aplicación' });
    }
}   