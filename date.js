//jshint esversion:6
exports.getDate=function(){
//function getDate(){
var today=new Date();

var options={
  weekday:"long",
  day:"numeric",
  month:"long"
}
var currentday = today.toLocaleDateString("en-US",options);
 return currentday;
}
