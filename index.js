


const express = require("express");
const app = express();


app.get("/",function (req,res){
  res.send("こんにちは");
  });


app.listen(5000, function(){
  console.log("Listening on localhost port 5000");
});
