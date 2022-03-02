


const express = require("express");
const app = express();
const coronaData = require("./coronaData.json");


app.get("/",function(req, res){
  res.send(coronaData);
});


//port 5000はAirPlayと競合
app.listen(5000, function(){
  console.log("Listening on localhost port 5000");
});
