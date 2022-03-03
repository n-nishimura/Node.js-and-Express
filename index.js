
//https://qiita.com/masato44gm/items/dffb8281536ad321fb08
//restAPI

const express = require("express");
const app = express();


app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html");
});


//port 5000はAirPlayと競合
app.listen(5000, function(){
  console.log("Listening on localhost port 5000");
});
