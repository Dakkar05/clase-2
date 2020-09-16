var mongoose=require("mongoose"),
Schema=mongoose.Schema;
var atributos=new Schema({
    idEdificio:{type:Number,trim:true},
    dimension:{type:Number,trim:true},
    Ubicacion:{type:String,trim:true},
    calleprincipal:{type:String,trim:true},
    capacidad:{type:String,trim:true}

});
var edificio=mongoose.model('edificio',atributos);
module.exports=edificio;