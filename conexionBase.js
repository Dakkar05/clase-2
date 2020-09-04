var mongoose= require("mongoose")
var connection=mongoose.connect('mongodb+srv://Daniel1234:Daniel1234@cluster0.j5zyj.mongodb.net/clase?retryWrites=true&w=majority');

mongoose.connection.on('open',(ref)=>{
    console.log("Conectado a mongo cloud");
})