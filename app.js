//jshnint esversion:6

const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
const app=express();
app.set('view engine','ejs');
  var items=["sleep","eat","study"];
  let workitems =[];
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(express.static("public"));
const day1=["sunday","monday","tueday","wedday","thuday","friday","satday"];
app.get("/",function(req,res)
{
 let currentday =date.getDate();
  res.render("list",{listtitle:currentday,newListItem:items});
});
  app.post("/",function(req,res){
    var item=req.body.newItem;
    if(req.body.list1 === "Work List"){
       workitems.push(item);
       res.redirect("/work");
    }
    else{
      items.push(item);
      res.redirect("/");
    }
    //  res.redirect("/");
  });


app.get("/work",function(req,res){
  res.render("list",{listtitle:"Work List",newListItem:workitems});
});

app.get("/about",function(req,res){
  res.render("about");
})

app.listen(3000,function(){
  console.log("Server is listening at port 3000");
});
