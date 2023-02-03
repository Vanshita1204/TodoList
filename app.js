// mongodb+srv://Vanshita:<password>@cluster0.6aqhroh.mongodb.net/?retryWrites=true&w=majority
const express= require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")

// create express app
const app=express()

//handle CORS
app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers","auth-token,Origin,X-requested-With,Content-Type,Accept");
    next();
})

// database stuff
mongoose.set('strictQuery', true);
const uri="mongodb+srv://Vanshita:H1I2j3k4.,.@cluster0.6aqhroh.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("MongoDB connected")
})
.catch(err => console.log(err))

app.use(bodyParser.json())
app.get("/",(req,res) => {
    res.send("yay home page")
})

const TodosRoute= require('./routes/Todos');
app.use("/todos", TodosRoute)

// start server
app.listen(3000, ()=> {
    console.log("listening at port 3000")
})