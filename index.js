
//https://qiita.com/masato44gm/items/dffb8281536ad321fb08
//restAPI
const fs = require("fs")
const express = require("express");
const app = express();
app.use(express.urlencoded({extended : true }));

app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/autumn", function(req,res){
  fs.writeFile(__dirname + "/date.txt", res.body.activity , function(){
    res.send("投稿完了");
  });
});


//port 5000はAirPlayと競合
app.listen(5000, function(){
  console.log("Listening on localhost port 5000");
});
