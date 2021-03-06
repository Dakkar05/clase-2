const express=require("express")
const body_parser = require("body-parser")
//var http=require("http");
//var server=http.createServer();
const app=express();
var connection=require('./conexionBase');
const rutas=require('./rutas');
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));
app.use('/',rutas);

function mensaje (peticion,respuesta){
respuesta.writeHead(200,{'content-type':'text/plain'})
respuesta.write("Hola mundo")
respuesta.end();
}

function mensajejson(peticion,respuesta){
respuesta.setHeader('content-type','application/json');
respuesta.writeHead(200);
respuesta.end('{"mensaje":"es un hola mundo en json"}');
console.log(peticion);
}

//app.on('request',mensaje);
var port = process.env.PORT || 8080
app.listen(port,function(){
    console.log("el servidor se inicio correctamente")
}
); 