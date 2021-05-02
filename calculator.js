//jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const { urlencoded } = require("body-parser");

const app=express();
app.use(express.urlencoded({extended:true}));


app.get("/", function(req,res){
   res.sendFile(__dirname + "/index.html");
});

app.post("/index.html",function(req,res){

//    res.send("Congo you have submitted the data!!")
   var n1=Number(req.body.num1);
   var n2=Number(req.body.num2);
   var result=n1+n2;
   res.send("Sum of two number is :"+result);
  
});

app.listen(3000,function(){
    console.log("Port is running successfuly");
});