//Date
//Get Date
//var time = Date();
/*
var time = new Date();

var myTime = time.getFullYear();
var myTime = time.getMonth();
var myTime = time.getDate();
var myTime = time.getDay();
var myTime = time.getHours();
var myTime = time.getMinutes();
var myTime = time.getSeconds();

//Print times using the own computer time
document.getElementById('test').innerHTML = myTime;
document.getElementById('test1').innerHTML = time.getDate() + "/" + time.getMonth() + "/" + time.getFullYear();
document.getElementById('test2').innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

//Print months from Array
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
document.getElementById('test3').innerHTML = months[time.getMonth()];

//Print days from Array
var myDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
document.getElementById('test4').innerHTML = myDays[time.getDay()];
*/

//Set Date
/*
var time = new Date();

time.setFullYear(2020);
time.setFullYear("2020");
time.setFullYear(2020,2,3);
time.setMonth(10);
time.setDate(30);
time.setHours(20);
time.setMinutes(5);
time.setSeconds(30);


document.getElementById("test").innerHTML = time;
*/

//Condition  

/*var a = 30;

if(a <= 29){
   document.getElementById("test4").innerHTML = "Condition is right";
   }else{
       document.getElementById("test4").innerHTML = "Condition is wrong";
   }

var blog_description = "Sit assumenda provident quasi, aliquid culpa perspiciatis, iste rerum placeat ad officiis consequatur. Earum aliquid inventore."

var getDesLen = blog_description.length;

//document.write(getDesLen);

if(getDesLen <= 140){
   document.getElementById("test4").innerHTML = "Tweet is Published and your tweet length is " + getDesLen + "characters";
   }else{
       document.getElementById("test4").innerHTML = "Tweet length must be less than or equals to 140 characters";
   }*/

var a = 30;
if(a==10){
    document.getElementById("test4").innerHTML = "A is 10";
}else if(a==12){
    document.getElementById("test4").innerHTML = "A is 12";
}else if(a==15){
    document.getElementById("test4").innerHTML = "A is 15";
}else if(a==20){
    document.getElementById("test4").innerHTML = "A is 20";
}else{
    document.getElementById("test4").innerHTML = "Entry invalid";
} 

var gpa = 80;

if(gpa > 100){
    document.getElementById("test4").innerHTML = "Input is invalid";
}else if( gpa >= 80){
    document.getElementById("test4").innerHTML = "Result is A+";
}else if( gpa >= 70){
    document.getElementById("test4").innerHTML = "Result is A";
}else if( gpa >= 60){
    document.getElementById("test4").innerHTML = "Result is A-";
}else if( gpa >= 50){
    document.getElementById("test4").innerHTML = "Result is B";
}else if( gpa >= 40){
    document.getElementById("test4").innerHTML = "Result is B-";
}else if( gpa >= 33){
    document.getElementById("test4").innerHTML = "Result is C";
}else{
    document.getElementById("test4").innerHTML = "Fail";
}






