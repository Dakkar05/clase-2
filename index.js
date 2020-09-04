const express=require("express")
const body_parser = require("body-parser")
var http=require("http");
var server=http.createServer();
function mensaje (petcion,respuesta){
respuesta.writeHead(200,{'content-type':'text/plain'})
respuesta.write("Hola mundo")
respuesta.end();
}
server.on('request',mensaje);
server.listen(3000,function(){
    console.log("el servidor se inicio correctamente")
});