//magic eightball

var numberofreplys = 6;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'


    /*
    write conditional logic here using if, else if, and else


    */
if (choice === 2) {
    reply = "it will be a great day";
} else if (choice === 5) {
    reply = "lucky day";
} else {
    reply = "You need to make some options using if/else";
}
    console.log(reply);
}
ask();


{function fizzBuzz(){
	var output;
	for(var i=1;i<=100;i++){
		output = '';
		if(i%3 === 0){
			output ='Fizz';
		} 
		if(i%5 === 0){
			output ='Buzz';
		} 
		if(i%3 !== 0 && i%5 !== 0) {
			output+=i;
        
		} else {
		console.log(i);
	}
    }
