const express = require("express"); 
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get("/bmi",(req,res)=>{
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/",(req,res)=>{
    var r1 = Number(req.body.firstnum);
    var r2 = Number(req.body.secondnum);
    var result= r1+r2;
    res.send("the answer "+result);
});

app.post("/bmiCalculator.html",(req,res)=>{
    var r1 = Number(req.body.height)/100;
    var r2 = Number(req.body.weight);
    var result= r2/(r1*r1);
    res.send("your bmi "+result);
})

app.listen(3000,()=>{console.log("look 3000");} );