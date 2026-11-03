  //  =====CHAPTER-1=====
// question1
alert('welcome to my website');

// question2

alert('Error! Please enter a valid password.');

// question3
alert('Welcome to JS Land...\nHappy Coding!');

// question4
alert('Welcome to JS Land...');
alert('Happy Coding!');

// question5
alert('Hello... I can run JS through my web browser\'s console.');

  //  =====CHAPTER-2=====

  // question1

  var username;
  // question2
  var MyName = 'Ayan Ahmed';
  // question3
 
  var message;

  message = 'Hello World';

  alert(message)

  // question4

  var name = 'jhone Doe'
  var age = '15 years old'
  var degree = 'matric'

  alert(name)
  alert(age)
  alert(degree)
  // question5

  var pizza = 'pizza\npizz\npiz\npi\np'

  alert(pizza)

  // question6

  var email = 'ayan.ah.2008@gmail.com'

  alert('My email address' + email )

  // question7

  var book = 'A smarter way to learn JavaScript'

  alert('I am trying learn form book'+ "" +  book )
 // question8

 document.write('yah! I can write HTML content through JS ')


 // question9

 var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
 alert(design)




 let Age;

Age=18;


alert('i am' + age + '' + 'years old');

let visitor;

visitor = 7;

document.write('You have visited this site ' + visitor + ' times');

document.write('<br>')

let birthYear = 2008;


document.write('My birth year is ' + birthYear);



let visitorName = "John Doe";
let productTitle = "T-shirt";
let quantity = 5;
document.write('<br>')

document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");

let ayan;
let ahmed;
let anas;

    //===> illegal ===>//

// var user-name;
// var 1user*name;
// var %user@name;
// var #UserName;
// var \user&name\; 

//==>legal==>//
var userName;
var $username;
var _username;
var username1;
var USERNAME;


document.write('<br>')

// ==b== //
alert("Letters,Number,Dollar signs $,Underscores _")

alert("Letter, dollar sign $, Underscore _,")

var num1 = 3
var num2  = 5 
var total = num1 + num2

document.write('sum of ' + num1 + " " + 'and' +' ' + num2 +' '+ 'is' +' '+ total)


var num1 = 10;
var num2 = 3;


var subtraction = num1 - num2;
document.write("Subtraction: " + subtraction + "<br>");


var multiplication = num1 * num2;
document.write("Multiplication: " + multiplication + "<br>");


var division = num1 / num2;
document.write("Division: " + division + "<br>");


var modulus = num1 % num2;
document.write("Modulus: " + modulus );




var num;
document.write('<br>')

document.write("Value after variable declaration is: " + num + "<br>");


num = 5;


document.write("Initial value: " + num + "<br>");


num++;


document.write("Value after increment is: " + num + "<br>");


num = num + 7;


document.write("Value after addition is: " + num + "<br>");


num--;


document.write("Value after decrement is: " + num + "<br>");


var remainder = num % 3;


document.write("The remainder is: " + remainder);



var ticketPrice = 600;

var totalCost = ticketPrice * 5;

document.write("Total cost of buying 5 movie tickets is " + totalCost + " PKR");



var num = 5;

document.write(num + " x 1 = " + num * 1 + "<br>");
document.write(num + " x 2 = " + num * 2 + "<br>");
document.write(num + " x 3 = " + num * 3 + "<br>");
document.write(num + " x 4 = " + num * 4 + "<br>");
document.write(num + " x 5 = " + num * 5 + "<br>");
document.write(num + " x 6 = " + num * 6 + "<br>");
document.write(num + " x 7 = " + num * 7 + "<br>");
document.write(num + " x 8 = " + num * 8 + "<br>");
document.write(num + " x 9 = " + num * 9 + "<br>");
document.write(num + " x 10 = " + num * 10 + "<br>");



var celsius = 25;

var fahrenheit = (celsius * 9/5) + 32;

document.write(celsius + "°C is " + fahrenheit + "°F <br>");


var tempFahrenheit = 77;

var tempCelsius = (tempFahrenheit - 32) * 5/9;

document.write(tempFahrenheit + "°F is " + tempCelsius + "°C");



// Price of items
var priceItem1 = 500;
var priceItem2 = 800;

// Ordered quantity
var quantityItem1 = 2;
var quantityItem2 = 3;

// Shipping charges
var shippingCharges = 200;

// Calculate total cost
var totalItem1 = priceItem1 * quantityItem1;
var totalItem2 = priceItem2 * quantityItem2;

var totalCost = totalItem1 + totalItem2 + shippingCharges;

// Display receipt
document.write("<h2>Shopping Cart Receipt</h2>");

document.write("Price of Item 1: " + priceItem1 + "<br>");
document.write("Quantity of Item 1: " + quantityItem1 + "<br>");

document.write("Price of Item 2: " + priceItem2 + "<br>");
document.write("Quantity of Item 2: " + quantityItem2 + "<br>");

document.write("Shipping Charges: " + shippingCharges + "<br>");

document.write("<h3>Total Cost: " + totalCost + "</h3>");



// Total marks
var totalMarks = 500;

// Marks obtained
var obtainedMarks = 425;

// Calculate percentage
var percentage = (obtainedMarks / totalMarks) * 100;

// Display result
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%");



// Currency variables
var usDollar = 10;
var saudiRiyal = 25;

// Convert total currency into PKR (single expression)
var totalPKR = (usDollar * 104.80) + (saudiRiyal * 28);

// Display result
document.write("Total Currency in Pakistani Rupees: " + totalPKR + " PKR");


// Initialize a variable
var number = 10;

// Perform all calculations in a single expression
var result = ((number + 5) * 10) / 2;

// Display result
document.write("Initial Number: " + number + "<br>");
document.write("Final Result: " + result);




// Current year
var currentYear = 2026;

// Birth year
var birthyear = 2008;

// Calculate possible ages
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

// Display result
document.write("They are either " + age2 + " or " + age1 + " years old");



// Store radius
var radius = 5;

// Value of PI
var pi = 3.142;

// Calculate circumference
var circumference = 2 * pi * radius;

// Calculate area
var area = pi * radius * radius;

// Display results
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area);



// Favorite snack
var favoriteSnack = "Chips";

// Current age
var currentAge = 18;

// Maximum age
var maxAge = 80;

// Estimated amount per day
var amountPerDay = 2;

// Calculate lifetime supply
var totalSupply = (maxAge - currentAge) * 365 * amountPerDay;

// Display result
document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("You will need " + totalSupply + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge);




// Initialize variable
var a = 10;

document.write("Result:<br>");
document.write("The value of a is: " + a + "<br>");
document.write("........................................<br><br>");

// Pre-increment
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-increment
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Pre-decrement
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// Post-decrement
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a);




var userName = prompt("Enter your name");

alert("Hello " + userName + "! Welcome.");



var a = 2, b = 1;

var result = --a - --b + ++b + b--;

document.write("Value of a: " + a + "<br>");
document.write("Value of b: " + b + "<br>");
document.write("Result: " + result);


var number = prompt("Enter a number");

if (number === "" || number === null) {
    number = 5;
} else {
    number = Number(number);
}

for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}





// Take subjects names
var subject1 = prompt("Enter first subject name");
var subject2 = prompt("Enter second subject name");
var subject3 = prompt("Enter third subject name");

// Total marks
var totalMarks = 100;

// Take obtained marks
var marks1 = Number(prompt("Enter marks of " + subject1));
var marks2 = Number(prompt("Enter marks of " + subject2));
var marks3 = Number(prompt("Enter marks of " + subject3));

// Calculate total
var obtainedMarks = marks1 + marks2 + marks3;

var total = totalMarks * 3;

// Calculate percentage
var percentage = (obtainedMarks / total) * 100;

// Display result in browser
document.write("<h2>Marks Sheet</h2>");

document.write("<table border='1' cellpadding='10'>");

document.write("<tr>");
document.write("<th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject1 + "</td>");
document.write("<td>100</td>");
document.write("<td>" + marks1 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject2 + "</td>");
document.write("<td>100</td>");
document.write("<td>" + marks2 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject3 + "</td>");
document.write("<td>100</td>");
document.write("<td>" + marks3 + "</td>");
document.write("</tr>");

document.write("</table>");

document.write("<h3>Total Marks: " + total + "</h3>");
document.write("<h3>Obtained Marks: " + obtainedMarks + "</h3>");
document.write("<h3>Percentage: " + percentage + "%</h3>");





