const express=require("express");
const mongoose=require("mongoose");
const productRouter=require("./routes/route");
const cors=require('cors');
const app=express();

app.use(cors());
app.use(express.json());
app.use("/",productRouter);

mongoose.connect('mongodb://localhost:27017/mern_db',{
	useNewUrlParser:true,
	useUnifiedTopology:true
}).then(()=>console.log("MongoDB connected"));

app.listen(8000,()=>console.log("Server Started Port No :8000"))