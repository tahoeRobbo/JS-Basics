//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  var inner = outer();

//Once you do that, invoke inner.

 inner();

//returns "The original name was Tyler" 



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  var callJake = callFriend();
	callJake("435-215-9248");



//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/
var makeCounter = function(addBy) {
	if(!addBy && typeof addBy !== "undefined") {
		var wrongInput = addBy;
		alert("Very funny.. You can't add by " + wrongInput + ".  Try a number!");
	} else if(addBy === 0 || addBy === undefined) {
		var n = 0;
		var countPlusOne = function() {
			return (++n);
		};
		return countPlusOne;
	} else {
		var total = 0;
		var xPlus = addBy;
		var countPlusChoice = function() {
			total = total + xPlus;
			return total;
		};
		return countPlusChoice;
	};
};
	

  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem

	
	
	/*//FE MASTERS CLOSURE W BIANCA
	
var add = function(num) {
	var num1 = num;
	var addToNum1 = function(num2) {
		return num1 + num2;
	};
	return addToNum1;
};

//Counter Example FEMASTERS

var counter = function() {
	var n = 0;
	return {
		count: function() { return ++n; },
		reset: function() { n = 0; }
	};
};

*//*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
*/
	
	//First non-solution
/* var outerFn = function(x) {
		var x = function() {
			outerFn();
		};
		return x;
	};*/


//Try2	
/*	
var executeOnce = function(fnPara) {
	var fnArg = fnPara
	var runPassedFn = function() {
		return fnArg();
	};
	return runPassedFn;
	*/

//Try 3

var doOnce = function(fnPara) {
	var fnArg = fnPara;
	return (function(){ fnArg() })
};

var countOnce = doOnce(count);
countOnce();
console.log(countOnce.n);
	






//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. The first parameter will be an anonymous function and the second parameter, 'N', will be a number. Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/

var fnCounter = function(anonFunction, n) {
	var i = 0;
	while (i > n) {
		anonFunction();
	};
	return "STOP";
};



//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

//It will log out '5' five times at 5 second intervals.  I bet this based on what we saw in the lecture -- the full set of iterations will run leaving 'i' with the value '5' by the time it is ever accessed by the setTimeout method.

  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?


//Wrong -- it logged '6' five times.. maybe because of the final 'i++' at the end of the loop? It raised the final value of 'i' to six -- makes sense because then it will not loop again ( violates i <= 5)

  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/


//Added IIFE **After the loop but **Before the setTimeout() method. Creates new local scope that 'locks in' all the created 'i' values.
  var counter = function(){
    for (var i=1; i<=5; i++) {
			(function() {
				setTimeout(alert( i ), (i*1000) );
			}());
		};
	};
	//CANT GET THE INTERVAL IN setTimeout TO RESPOND TO I!!!!!!!

//Next Problem

//TEMPLATE IIFE
/*(function(){
	
}());*/


//  Make the following code work
	

var arrayCreator = function() {
	return {
		0 : function() { return 0 },
		1 : function() { return 1 },
		2 : function() { return 2 },
		3 : function() { return 3 },
		4 : function() { return 4 },
		5 : function() { return 5 }
	};
};

var functionArray = arrayCreator();
  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  //*Hint: Don't let this fool you. Break down what's really happening here.



