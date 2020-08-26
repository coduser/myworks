
//FUNCTION SYNTAX
// * Function Keyword
// * Function Name
// * Function Parentheses
// * Function Body
// * Function Parameter
// * Function Argument
// * Function Return value


/*document.write("<h2>JavaScript Function</h2>");
document.write("<br></br>");

function test_func()
{
    document.write("Learning and Earning Development<br>");
}

test_func();
test_func();
test_func();
test_func();
test_func();*/


/*document.write("<h2>Parameter and Argument</h2>");
document.write("<br>");

//parameter inside the function name
//ফাংশন তৈরির সময় ফাংশন এর নামের মধ্যে যা লেখা হয় সেগুলোকে প্যারামিটার বলে
function test_func(a,b,c,name){    
    document.write(a+ "<br>");
    document.write(b+ "<br>");
    document.write(c+ "<br>");
    document.write(name+ "<br>");
}
//argument inside the parentheses of function
//যখন ফাংশন কল করা হয় তখন এর মধ্যে যে ভ্যালু দেয়া হয় সেটাকে আর্গুমেন্ট বলে
test_func(20,30,40,"Md Shafiqul Islam");*/


/*document.write("<h2>Parameter and Argument</h2>");
document.write("<br>");


function test_func(a,b){    
    document.write("Summation is : " + (a+b) + "<br>"); 
    document.write("Difference is : " + (a-b) + "<br>"); 
    document.write("Product is : " + (a*b) + "<br>"); 
    document.write("Qoutient is : " + (a/b) + "<br>"); 
}

test_func(30,20);*/


/*//document.write("<h2>Return Values</h2>");
//document.write("<br>");

function test_return(a,b){
    return a + b;
}
var x = test_return(40, 70);

document.write(x);
document.getElementById("test").innerHTML = x;
//document.getElementById("test").innerHTML = test_return(40, 70);*/


//Object Syntax
/*document.write("<h2>Object Syntax</h2>");
document.write("<br>");

var student = {
    first_name: "Md. Shafiqul",
    last_name: "Islam",
    roll:"215487",
    age:21
}

//student.first_name;
//student["last_name"];

document.write(student.first_name + "<br>");
document.write(student.last_name + "<br>");
document.write(student.roll + "<br>");
document.write("Age is: " + student.age + "<br>");*/

/*document.write("<h2>Object Syntax</h2>");
document.write("<br>");

var student = {
    first_name: "Md. Shafiqul",
    last_name: "Islam",
    roll:"215487",
    age:21,
    full_name: function(){
        return this.first_name + " " + this.last_name;
    }
    
}

//student.first_name;
//student["last_name"];


document.write(student.full_name() + "<br>");*/


//EVENT
function display(){
    document.getElementById("view").innerHTML = "Hi, Md Shafiqul Islam sir";
    document.getElementById("view1").innerHTML = Date();
}










