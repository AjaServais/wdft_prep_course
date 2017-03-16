//magic eightball

var numberofreplys = 2;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'


    /*
    write conditional logic here using if, else if, and else


    */
if (choice === 2) {
    reply = "it will be a great day";
} else if (choice === 4) {
    reply = "lucky day";
} else {
    reply = "You need to make some options using if/else";
}
    console.log(reply);
}
ask();

