var mongoose=require("mongoose"),
Schema=mongoose.Schema;
var atributos=new Schema({
    idTerreno:{type:Number,trim:true},
    dimension:{type:Number,trim:true},
    barrio:{type:String,trim:true},
    calleprincipal:{type:String,trim:true}

});
var terreno=mongoose.model('terreno',atributos);
module.exports=terreno;