const { response, request } = require('express');

var edificio=require('./modeloedificio'),
express=require('express'),
rutas=express.Router();

rutas.post('/obtenerTodos',(request,response)=>{
    edificio.find({},(err,datos)=>{
        if(err){
            console.log(err);
            throw err;
        }
        response.status(200).json(datos);
    })

})
rutas.post('/crearEdi',(request,response)=>{
    var body=request.body;
    edificio.insertMany({
        idEdificio:body.idEdificio,
        dimension:body.dimension,
        ubicacion:body.ubicacion,
        calleprincipal:body.calleprincipal,
        capacidad:body.capacidad
    },(err,res)=>{
        if(err){
            console.log(err);
            throw err;

        }
        response.status(200).json(res);
    })
})
rutas.post('/editarEdi',(request,response)=>{
    var body=request.body;
    edificio.updateOne(
    {
        idEdificio:body.idEdificio
        
    },{
        dimension:body.dimension,
        ubicacion:body.ubicacion,
        calleprincipal:body.calleprincipal,
        capacidad:body.capacidad
    },(err,res)=>{
        if(err){
        console.log(err);
        throw err;
        }
        response.status(200).json(res);
    }
    )
}
)
rutas.post('/eliminarEdi',(request,response)=>{
    var body=request.body;
    edificio.deleteOne({
        idEdificio:body.idEdificio
    },(err,res)=>{
        if(err){
        console.log(err);
        throw err;
        }
        response.status(200).json(res);
    }
    )
}
)
module.exports=rutas;