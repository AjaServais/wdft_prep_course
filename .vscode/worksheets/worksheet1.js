var name = "";
name = "Aja";
console.log ("Hello" + name);

var x = 1125;
var y = 2;
console.log (x % y);

var a = true;
var b = false;
var c = true;
console.log (a || b || c);

var a = true;
var b = false;
var c = true;
console.log (a && b && c);

//Compute 10 - 3 * 5/4 + 202 % 3 and assign it to the variable answer1.
//Compute 10 - (3 * (5/4) + (202 % 3)) and assign it to the variable answer2.
//Print both of these answers. Why do you think they are different? Research the order of operations for JavaScript.  

var answer1 = 10 - 3 * 5/4 + 202 % 3;
console.log (answer1);

var answer2 = 10 - (3 * (5/4) + (202 % 3));
console.log (answer2);

//Convert the Integer 12 into a String.
//Convert the String "113" into an Integer.
//Convert the String "1.12356" into a Float.
//Convert the String "Hello World" into an Integer and save it to the variable x. Print x to the console. What do you see? Research the resulting value if you're not sure.

function shouldWePartyTonight(dayOfTheWeek) {
    if (dayOfTheWeek == "Monday" || dayOfTheWeek == "Tuesday" || dayOfTheWeek == "Wednesday" || dayOfTheWeek == "Thursday" || dayOfTheWeek == "Saturday" || dayOfTheWeek == "Sunday") {
        console.log("NO WAY! You should be coding...");
    }
    else {
        console.log("Yeah... I guess if you need a break.");
    }

};

shouldWePartyTonight('Monday');

function shouldWePartyTonight(dayOfTheWeek) {
    if (dayOfTheWeek == "Monday" || dayOfTheWeek == "Tuesday" || dayOfTheWeek == "Wednesday") {
        console.log("NO WAY! You should be coding...");
    }
    else if (dayOfTheWeek == "Thursday") {
        console.log("Depends! Is there a special on wings today?")
    }
    else if (dayOfTheWeek == "Friday") {
        console.log("Yeah... I guess if you need a break.");
    }
    else if (dayOfTheWeek == "Saturday" || dayOfTheWeek == "Sunday") {
        console.log("I don't know, seems like a good day to read about JavaScript.");
    }
    else {
        console.log("That is not a valid day of the week... have you already been partying?");
    }

};

shouldWePartyTonight('Monday');
    
function giveMeThePrice(item) {
    switch (item) {
      case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
      case "Apples":
        console.log("Apples are $0.32 a pound.");
        break;
      case "Bananas":
        console.log("Bananas are $0.48 a pound.");
        break;
      case "Cherries":
        console.log("Cherries are $3.00 a pound.");
        break;
      case "Mangoes":
      case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
      default:
        console.log("Sorry, we are out of " + item + ".");
    }

    console.log("Is there any other price you'd like to know?");
};









