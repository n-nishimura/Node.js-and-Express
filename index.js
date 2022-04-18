
//https://qiita.com/masato44gm/items/dffb8281536ad321fb08
//restAPI
const fs = require("fs")
const express = require("express");
const app = express();
app.use(express.urlencoded({extended : true }));
const activities = require("./activities.json")

app.get("/",function(req, res){
  res.sendFile(__dirname + "/index.html");
  // console.log(req)
});

app.post("/autumn", function(req,res){
  fs.writeFile(__dirname + "/data.txt", req.body.activity , function(){
    res.send("投稿完了");
  });
});

app.post("/update",function(req,res){
  activities[0].number = req.body.updateActivity;
  res.send(activities);
});

app.post("/delete",function(req,res){
  activities.splice(req.body.number , 1);
  res.send(activities);

});


//port 5000はAirPlayと競合
app.listen(5000, function(){
  console.log("Listening on localhost port 5000");
});
