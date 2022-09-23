var mysql = require("mysql");
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblioteca'
}
);
//validacion de conexion
con.connect(
    (err)=>{
        if (!err){
            console.log('conexion establecida');
        } else {
 console.log('Error de conerxión');
        }
    }
);
module.exports=con;