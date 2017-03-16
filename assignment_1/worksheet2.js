//magic eightball

var numberofreplys = 2;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'

if (choice == 2) {
    reply = "it will be a great day";
} else {
    reply = "does not look so good";
}
    /*
    write conditional logic here using if, else if, and else


    */

    console.log(choice);
}

ask();
