//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

 var isTyler = function(name) {
	 if (name === "Tyler") {
		 	return true;
	 } else {
	 		return false;
	 };
 };

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


 var getName = function() {
	 var userName = prompt("What's your name?");
	 return userName;
 };


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.



var welcome = function() {
	var getName = function() {
	 	var userName = prompt("What's your name?");
	 	return userName;
 	};
	alert("hello " + getName());
};



//What is the difference between arguments and parameters?

  //A parameter describes what kind of input information a function is looking for.  They are expressed in the functino definition.  ie. 
// var name = function(first, last) where first and last are the two parameters

//An argument is the information that you pass into a function to be worked on. They are expressed in the calling of the functino 
//ie name(Robert, Hallowell) where Robert and Hallowell are the arguments, PASSED INTO THE PARAMETERS first and last.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //In javascript, these values are always falsy
/* 
*false
*0
*"" -- empty string
null
undefined
NaN
*/

var falsieTest = function(x) {
	if(!x) {
		alert("You're Falsy!!");
	} else {
		alert("YO YOU DA TROOF, SON!")
	}
};
//Next Problem


//Create a function called myName that returns your name

var myName = function() {
		return "Robert Hallowell";
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;
alert(newMyName());

//Now alert the result of invoking newMyName

//Alerts Robert Hallowell


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function() {
	return function() {
		return "Robert Hallowell";
	}
};

//Now save the result of invoking outerFn into a variable called innerFn.

 var innerFn = outerFn();

//console.log(innerFn) -- returns function() {
//		return "Robert Hallowell";
//	}

//Now invoke innerFn.

innerFn();
//returns "Robert Hallowell"
