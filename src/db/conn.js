const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/CRUD-with-ejs",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.once("open",()=>{
    console.log('Mongoose is Connected')
})
mongoose.connection.on("error",(e)=>{
    console.log('Mongoose is Not Connected',e);
})
