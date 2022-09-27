module.exports={
//crear una funcion 
    obtener: function (conexion,funcion) {
        conexion.query("SELECT * FROM libros", funcion ); 
    },
    
    obtener: function (conexion,datos,funcion) {
        conexion.query ("INSERT INTO `libros`(`codigo_libro`, `nombre`, `autores`, `ISBN`, `solicitadopor`, `ano_edicion`, `genero`) VALUES (?,?,?,?,?,?,?)",[datos.codigo_libro,datos.nombre,datos.autores,datos.ISBN,datos.solicitadopor,datos.ano_edicion,datos.genero],funcion); 
    }  
}