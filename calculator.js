const express = require("express"); 
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/",(req,res)=>{
    var r1 = Number(req.body.firstnum);
    var r2 = Number(req.body.secondnum);
    var result= r1+r2;
    res.send("the answer "+result);
})

app.listen(3000,()=>{console.log("look 3000");} );