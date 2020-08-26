//Switch Case

/*var switch_expression = 20;
switch (switch_expression) {
    case 10:
        document.write("Value is 10");
        break;
    case 20:
        document.write("Value is 20");
        break;
    case 30:
        document.write("Value is 30");
        break;
    case 33:
        document.write("Value is 33");
        break;
    default:
        document.write("Invalid");
}*/

/*
var usr_name = "Sharmin";
switch (usr_name) {
    case "Fahmida Brishti":
        document.write("She is a student");
        break;

    case "Sharmin":
        document.write("She is a relative");
        break;

    case "Shohag":
        document.write("He is freelancer");
        break;

    default:
        document.write("No matched data");
}
*/



function getTheDay() {
    
    var myDate = new Date();
    var getDayName = myDate.getDay();

    switch (getDayName) {
        case 0:
            document.getElementById("show").innerHTML = "Sunday";
            break;

        case 1:
            document.getElementById("show").innerHTML = "Monday";
            break;

        case 2:
            document.getElementById("show").innerHTML = "Tuesday";
            break;

        case 3:
            document.getElementById("show").innerHTML = "Wednesday";
            break;

        case 4:
            document.getElementById("show").innerHTML = "Thursday";
            break;

        case 5:
            document.getElementById("show").innerHTML = "Friday";
            break;

        default:
            document.getElementById("show").innerHTML = "Saturday";
    }

}

/*
var myDate = new Date();
var getDayName = myDate.getDay();

switch (test) {
    case 0:
        document.getElementById("show").innerHTML = "Sunday";
        break;

    case 1:
        document.getElementById("show").innerHTML = "Monday";
        break;

    case 2:
        document.getElementById("show").innerHTML = "Tuesday";
        break;

    case 3:
        document.getElementById("show").innerHTML = "Wednesday";
        break;

    case 4:
        document.getElementById("show").innerHTML = "Thursday";
        break;

    case 5:
        document.getElementById("show").innerHTML = "Friday";
        break;

    default:
        document.getElementById("show").innerHTML = "Saturday";
}
*/

//LOOP

//For Loop

/*var a;
for (a = 1; a <= 50; a++) {
    document.write(a + "<br>");
}*/

/*var fruits = ["apple", "mango", "orange", "banana", "pineapple"];

for(i=0; i < fruits.length; i++){
    document.write(fruits[i] + " ");
}*/

/*var fruits = ["apple", "mango", "orange", "banana", "pineapple"];

for(i in fruits){
    document.write(fruits[i] + " ");
}*/

var fruits = ["apple", "mango", "orange", "banana", "pineapple"];
var student = {name:"John Doe", roll:"12345", district:"Barishal", phone:"017000000" };
var len = fruits.length;

//for(i=0; i<len; i++){
//    document.write("<h4>"+fruits[i]+"</h4>");
//}

for(i of fruits ){
    document.write("<h4>"+i+"</h4>");
}





//for(a=0;a<12;a++){
//    document.write("<p style='background:red;'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore saepe sunt esse ut commodi obcaecati quo odio magni asperiores laudantium quam illo aspernatur quae ab soluta omnis modi dolorem reprehenderit, earum facilis! Ad nam, facilis corrupti. Asperiores dolore, omnis id at aspernatur magni facilis, itaque, quo atque tempora incidunt accusantium laudantium nisi iusto eius nesciunt odio! Esse asperiores soluta ea ullam quibusdam vel illum mollitia dolores commodi rerum, vitae atque molestiae quas, corporis labore impedit nihil neque suscipit reprehenderit provident quam similique quis tempore dignissimos ducimus? Molestiae dicta cumque soluta atque impedit officia inventore, explicabo magni, unde. Autem, odio, quis.</p>");
//}

/*
var i;
var j;

for(i=1,j=2; i<=5, j<=20; i++, j=j+2){
    document.write("<h4>"+i+" "+j+"</h4>")
}
*/

//var k=1;
//for(;k<=30;){
//    document.write(k+"<br>");
//    k++;
//}

