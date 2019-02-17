				 udmey JAVASCRIPT COURSE
console.log(string or expression); // is also a function call

// TYPES OF PROGRAMMING :
	- STATIC = values cant changable.

	- DYNAMIC = values can be changed later.


	- REFERENCE DATA TYPES :
			
			|
OBJECT		| syntax : varname = {key : value, ...}
			| 
			| EX :
			|		let person = { name : 'jai', age : 23 }
			|
			|Accessing :
			|		person.name = 'jai'; [Dot Notation]
			|		person['name'] = 'jai' [Bracket Notation]
			|
			///////////////////////
			| Array is data structure that used to represent a list of items.
			|
ARRAY		| let array = ['jai', 'loves', 'Bikes'] // ARRAY is an OBJET.
			| array[3] = 'pretty'; // Adding elements to an array.	
			|console.log(array.length); // Length is one of the property.
			|
			////////////////////////
			|
			|  Its a Set of statements that performs tasks and calculates values.
FUNCTIONS	|
			|	Syntax : function function_name(parameters as variables, lastName){
			|				// body of the function
			|				console.log('hai ' + parameter + ' ' + lastName);
			|			}
			|
			|			functon_name(arguments as values, 'sonu'); // Statement
			|
			//////////////////////// PERFORMING CALCULATING VALUES :
			|
TYPES		|   function square(num){
			|		    return num * num;
			|		}
			|		console.log(square(2));
			|
			|
			|
			|

- OBJECT ORIENTED PROGAMMING IN JAVASCRIPT :

			| 4 CONCEPTS :
			|		- ENCAPSULATION (Grouping related variables and functions together to reduce complexity + Re-use in programs.)
			|		- ABSTRACTION (Reduces the impact of change)
			|		- INHRITANCE (Mechanism to eliminate redundant code)
			|		- POLYMORPHISM (mechanism to eliminate long if--else and switch--case statements)
			|
			|
			| DIFF B/W OOP & PROCEDURAL PROGRAMMING :
			|
			|	// PROCEDURAL PROGRAMMING is the basic such as values stored in variables and function operate on the data. While project is growing further there'll be lot of functions and variables
			| 	// will depend upon each other may cause problems.
			|
			|	// In other hand, OOP  	
			|
			|
	
	- CODE STRUCTURE :

			|
			| 
Statements	|	Statements are syntax constructs and commands that perform actions.
			|
			|	Ex :
			|		alert('Hello'); alert('World'); // Two different statements in a line.
			|
			#
			|
			|
Semicolon	|	A semicolon may be omitted in most cases when a line break exists.
			|
			|	Ex :
			|		alert('Hello')
			|		alert('World')
			|	
			|	There are cases when a newline does not mean a semicolon, for example:
			|	
			|	Ex :
			|		alert(3 +
			|		1
			|		+ 2);
			|	
			|	But there are situations where JavaScript “fails” to assume a semicolon where it is really needed.
			|
			|	Ex :
			|		alert("There will be an error")							alert("There will be an error"); // It should work now !		
			|													----->
			|		[1, 2].forEach(alert)									[1, 2].forEach(alert)
			|
			#
			|
			|
Comments	|	There are two types of comment. They are,
			|
			|		// Single line OR Ctrl + /
			|
			|		/* MULTIPLE
			|		   LINE */	or ' Ctrl + Shift + / '
			|

	- The modern mode, "use strict" :

			|
			|	To keep the old code working, most modifications are off by default. One needs to enable them explicitly /* with */  a special directive "use strict" .
			|	The directive looks like a string: "use strict" or 'use strict'. When it is located on the top of the script, then the whole script works the “modern” way.
			|
			|	The "use strict" directive switches the engine to the “modern” mode, changing the behavior of some built-in features. 
			|	
			|	Ex:
			|		"use strict";
			|
			|		// this code works the modern way
			|w		alert('use strict mode.');
			|		...
			|		
			|

	- VARIABLE :

			|	
			|	A variable is a “named storage” for data. We can use variables to store goodies, visitors and other data.
			|	To create a variable in JavaScript, we need to use the let keyword.
			|
			|	EX :
			|			let message;																let message = 'Hello!'; // define the variable and assign the value
			|																						alert(message);
			|			message = 'hello'; // store the STRINGS   				or  				
			|
			|	Declaring multiple variable in one line :
			|
			|		let message = 'hello', age = '23';
			|
			|////////////////////// NOTE : use camelCase for long varibale names, for instance : var imLuckyMan = 0;
			|
			|			let $ = 1; // declared a variable with the name "$"
			|			let _ = 2; // and now a variable with the name "_"
			|
			|			alert($ + _); // 3
			|
			#
			|
			|
'Constant'	|	To declare a constant (unchanging) variable, one can use 'const' instead of 'let':
			|	NOTE : Variables declared using const are called “constants”. They cannot be changed. An attempt to do it would cause an error:
			|
			|	Ex :
			|			const myBirthday = '18.04.1982';
			|		
			#			
			|
'Uppercase'	|	There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.
'constant'	|	Such constants are named using capital letters and underscores.
			|
			|			const COLOR_RED = "#F00";
			|			const COLOR_GREEN = "#0F0";
			|			const COLOR_BLUE = "#00F";
			|			const COLOR_ORANGE = "#FF7F00";
			|
			|			// ...when we need to pick a color
			|			let color = COLOR_ORANGE;
			|			alert(color); // #FF7F00
			|
			|
			|	const pageLoadTime = /* time taken by a webpage to load */;
			|	The value of pageLoadTime is not known prior to the page load, so it’s named normally. But it’s still a constant, because it doesn’t change after assignment.
			|
			|
			#
			|
			|

	- DATA TYPES :

			|	A variable in JavaScript can contain any data. A variable can at one moment be a string and later receive a numeric value.
			|
			|	EX :
			|			let message = "hello";
			|			message = 123456;
			|
			|
'A number'	|
			|	let n = 123; // INTIGER
			|	n = 12.23; // FLOAT
			|
			|	Besides regular numbers, there are so-called “special numeric values” which also belong to that type: Infinity, -Infinity and NaN.
			|
			|	Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
			|
			|	EX :
			|			alert( 1 / 0 ); // Infinity
			|
			|	NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:
			|
			|	EX:
			|			alert( "not a number" / 2 ); // NaN, such division is erroneous
			|
			#
			|
			|
'A string'	|	Double quotes : "hello"; Single quotes : 'hai'; backticks : `hey`;
			|	
			|	Backticks are “extended functionality” quotes. They allow us to 'embed variables and expressions' into a string by wrapping them in ${…}.
			|	
			|	EX :
			|			let name = 'jhon';
			|			alert (` hello, ${name} `);			output : hello jhon
			|
			|					or
			|
			|			alert(` Its ${1 == 1}`);			output :P Its True
			|
			#
			|
			|
			|
'A boolean'	|	The boolean type has only two values: true and false.
'(Logical'	|
  'Type )'	|	Boolean values also come as a result of comparisons:
			|	 EX :
			|			let greater = 4 > 3;
			|			alert(greater);						output : True
			|			
			#
			|
'The Null'	|	In JavaScript null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
'Value'		|	EX :
			|			let age = null;
			|
			#
			|
			|
'The undefined' :	The meaning of undefined is “value is not assigned”.
			|	If a variable is declared, but not assigned, then its value is exactly undefined.
			|
			|	EX :
			|			let name;
			|			alert(name);						output : undefined
			|
			#
			|
			|
'Objects' &	|	The object type is special. All other types are called “primitive”, because their values can contain only a single thing (be it a string or a number or whatever).
			|	In contrast, objects are used to store collections of data and more complex entities. 
'Symbols'	|
			|	The symbol type is used to create unique identifiers for objects.
			|
			#
			|
'typeof'	|	The typeof operator returns the type of the argument. It supports two forms of syntax:
'Operator'	|	
			|	1) As an Operator : typeof name ,		2) As a Function : typeof(name)
			|
			|
			|
			
- TYPE CONVERSION :

			|
			|	Most of the time, operators and functions automatically convert a value to the right type. That’s called “type conversion”.
			|	
			#	
			|
'ToString'	|	String conversion happens when we need the string form of a value.
			|
			|	let value = true;
			|	alert(typeof value); // boolean
			|
			|	value = String(value); // now value is a string "true"
			|	alert(typeof value); // string
			#
			|
			|
'ToNumber'	|	Numeric conversion happens in mathematical functions and expressions automatically.
			|
			|	alert( "6" / "2" ); // 3, strings are converted to numbers
			|	
			|	////////////////
			|
			|	let str = "123";
			|	alert(typeof str); // string
			|
			|	let num = Number(str); // becomes a number 123
			|
			|	alert(typeof num); // number
			|
			|	////////////////
			|
			|	If the string is not a valid number, the result of such conversion is NaN, for instance:
			|
			|	let age = Number("an arbitrary string instead of a number");
			|
			|	alert(age); // NaN, conversion failed
			|
			#
			|
			|
'ToBoolean'	|	It happens in logical operations, but also can be performed manually with the call of Boolean(value).
			|
			|	Ex:
			|		alert( Boolean(1) ); // true
			|		alert( Boolean(0) ); // false
			|
			|		alert( Boolean("hello") ); // true
			|		alert( Boolean("") ); // false
			|
			|	NOTE : The String the value '0' and whitespace ' ' is also True.
			|		// BINARY +
			|		
			|		let apple = '1', orange = '2';
			|		alert(apple + orange);						OUTPUT: 12
			|
			|		// IF YOU WANT TO CONVERT THEM AS A NUMBER, THEN:
			|
			|		alert(+apple + +orange);					OUTPUT: 3
			|
			|

       -OPERATORS :

			|
			|	Operator withh Single Operand - UNARY			EX : X = -1
			|	Operator withh Multiple Operand - BINARY		EX : X = 1 - 2
			|
			#
			|
			|	Usually the plus operator + sums numbers, But iff the binary + is applied to strings, it merges them.
'string' 	|
'Concatenation'|	EX:
'Binary' +	|		let s = "my" + "string";			OUTPUT : mystring
			|		
			|	If any operand is a string then other one is converted to string too.
			|
			|	EX:
			|		let s = 1 + '2';					OUTPUT : 12
			|
			|	iF There are two numbers before the string then the number will be added before converting it to a string.
			|
			|	EX:
			|		let s = 1 + 3 + '2';				OUTPUT : 42
			|
			|	NOTE: CONCATENATION AND CONVERSION ONLY WORKS WITH THE '+' OPERATOR NOT WITH THE OTHER OPERATORS.
			|
			#
			|
			|
'NUMERIC'	|	The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything withh numbers.
'CONVERION'	|	but iff the operand is not a number, then it is converted into it.
'UNARY +'	|
			|	EX:
			|		let x = +1;							OUTPUT : 1
			|	// NUMERIC CONVERSION :	
			|		let x = +true;						OUTPUT : 1
			|		let x = +'';						OUTPUT : 0
			|
			|	The Binary + would add them as a string :
			|	EX:
			|		let apple = 1, oranges = 2;
			|		alert(apple + oranges);				OUTPUT : 12
			|
			|	If You neeed to treat them as a number, then:
			|
			|		alert(+apple + +oranges);			OUTPUT : 3
			|
			#
			|
			|
'ASSIGNMENT'|	an assignment = is also an operator. 
			|	EX:
			|		let num = 2 * 2 + 1;
			|		alert(num);							OUTPUT : 5
			|
			|	Chain Assignment :
			|	EX:
			|		let a, b, c;
			|		a = b = c = 2 + 2;					OUTPUT : 4 // BELONGS TO BOTH a, b, c
			|
			#
			|
			|
			|
'EXPONENTIATION'|	For a natural number b, the result of a ** b is a multiplied by itself b times.
			|	EX:
			|		alert(2 ** 2);						OUTPUT : 4
			|		alert(2 ** 3);						OUTPUT : 8
			|		alert( 4 ** (1/2) );				OUTPUT : 2
			|		alert( 8 ** (1/3) );				OUTPUT : 2
			|
			#
			|
			|
'INCREEMENT'	|	Increment ++ increases a variable by 1:
			|	EX:
			|		let num = 1;
			|		num++
			|		alert(num);							OUTPUT : 2
			|
			#
			|
			|
'DECREEMENT'|	Decrement -- decreases a variable by 1:
			|	EX:
			|		let num = 2;
			|		num--
			|		alert(num);							OUTPUT : 1
			|
			|	Operators ++ and -- can be placed both after and before the variable.
			|		- When the operator goes after the variable, it is called a “postfix form”: counter++.
			|		- The “prefix form” is when the operator stands before the variable: ++counter.
			|	But we can see the difference iff we use returned value of ++ / -- . 
			|	
			|	The prefix form returns the new value, while the postfix form returns the old value (prior to increment/decrement).
			|	EX:
			|		let counter = 1;
			|		let a = ++counter;
			|		alert(2 * ++a);							OUTPUT : 4  ////////////// PREFIX FORM / It Increements before multiplying.
			|
			|		//////////////
			|
			|		let counter = 1;
			|		let a = counter++;
			|		alert(2 * a++);							OUTPUT : 2 /////////////// POSTFIX FORM / It increements after the operation.
			|
			#
			|
			|
'BITWISE'	|	Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.
'OPERATORS'	|	The list of operators:
			|				- AND ( && )
			|				- OR (||)
			|				- XOR (^)
			|				- NOT (~)
			|				- LEFT SHIFT (<<)
			|				- RIGHT SHIFT (>>)
			|				- ZERO-FILL RIGHT SHIFT(>>>)
			|
			#
			|
			|
'MODIFY IN'	|	We often need to apply an operator to a variable and store the new result in it.
'PLACE'		|
			|	EX:
			|		let n = 2;
			|		n += 5; 								OUTPUT: n = 7
			|		n *= 2;									OUTPUT: n = 14
			|		
			|		//////////////
			|
			|		let n = 2;
			|		n *= 3 + 5;
			|		alert(n); 								OUTPUT: n = 16
			|
			#
			|
			|	The comma operator allows us to evaluate several expressions, dividing them withh a comma ,. Each of them is evaluated, but the result of only the last one is returned.
			|
			|	EX:
'COMMA'		|		let a = (1 + 2, 3 + 4);
			|		alert(a);								OUTPUT: 7
			|
			|
			
	COMPARISON :

			|	Comparison operators like > (Greater_than), < (lesser_than), == (Equals), >= (Greater_than_equalTo), <= (lesser_than_equalTo), != (Not equalTo)
			|
			|	The result of Comparison operators will be boolean data type.
			|		- TRUE means YES, CORRECT.
			|		- FALSE means NO, WRONG.
			|	EX:
			|		alert(2 > 1);							OUTPUT : TRUE
			|		alert(2 < 1);							OUTPUT : FALSE
			#
			|
			|	alert('glow' > 'glee');						OUTPUT : TRUE
'STRING'	|
'COMPARISION'|
			|	To see which string is greater than the other, the so-called “dictionary” or “lexicographical” order is used.
			|
			#
			|
			|
'STRICT'	|	A regular equality check == has a problem. It cannot differ 0 from false:
'EQUALITY'	|	EX:
'OPERATOR'	|		alert(0 == false);						OUTPUT : TRUE
			|		alert('' == false);						OUTPUT : TRUE
			|	
			|	
			|	To differentiate 0 from false :
			|		use STRICT EQUALITY OPERATOR '===' checks the equality without type conversion.
			|		alert( 0 === false );					OUTPUT : FALSE
			|
			#
			|
			|	// For strictly equality check:
'NULL' &	|	These values are different, because each of them belongs to a separate type of its own.
'UNDEFINED'	|		
			|	Ex:
			|		alert(null === false);					OUTPUT : FALSE
			|
			|	// FOR NON-STRICTLY EQUALITY OPERATOR :
			|
			|	EX:	
			|		alert(null == false);					OUTPUT : TRUE
			|
			|	// FOR MATHS AND OTHER UNDEFINED OPERATORS <, >, <=, >= :
			|	Values null/undefined are converted to a number: null becomes 0, while undefined becomes NaN.
			|	EX:
			|		alert(null > 0);						OUTPUT : FALSE
			|		alert(null == 0);						OUTPUT : FALSE
			|		alert(null >= 0);						OUTPUT : TRUE
			|
			|	The reason is that an equality check == and comparisons > < >= <= work differently.
			|	Comparisons convert null to a number, hence treat it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.
			|
			|	On the other hand, the equality check == for undefined and null works by the rule, without any conversions.
			|	They equal each other and don’t equal anything else. That’s why (2) null == 0 is false.
			|
			|	NOTE : THE UNDEFINED ALWAYS ENDS IN FALSE DURING COMPARISION.
			|
			|

	- Interaction: alert, prompt, confirm :

			|	
			|		
'ALERT'		|	This shows a message and pauses the script execution until the user presses “OK”.
			|	EX :
			|			alert('hello');
			|
			#
			|
'PROMT'    	|	Function prompt accepts two arguments:
			|	SYNTAX : promt('title', default);
			|
			|	EX :
			|			let age = prompt('How old are you','');
			|			alert(`You are ${age} years old`);
			#
			|
			|
'CONFIRM'	|	Function confirm shows a modal window withh a question and two buttons: OK and CANCEL. The result is true iff OK is pressed and false otherwise.
			|	EX:
			|		let isBoss = confirm("Are you the boss?");
			|		alert( isBoss ); // true if OK is pressed
			|
			
	- Conditional operators: 'if'  , '?' :

			|
			|	There is the if statement for that and also the conditional (ternary) operator for conditional evaluation which we will be referring as
			|	the “question mark” operator ? for simplicity.
			|
			|
	'IF'	|	The 'if' statement gets a condition, evaluates it and, if the result is true, executes the code.
'STATEMENT'	|	EX:
			|		let year = prompt('What is your age ?', '');
			|		if(year <= 28) alert('You are eligible.');								
			|
			|	If there is more than one statement to be executed, we have to wrap our code block inside curly braces:
			|	EX:
			|		let year = prompt('What is your age ?', '');		
			|		if(year <= 28){
			|			 alert('You are eligible.');
			|			 alert('You are great !');
			|		  }
			|
			#
			|
			|
'BOOLEAN'	|	The if (…) statement evaluates the expression in parentheses and converts it to the boolean type.
'CONVERSION'|
			|	A number 0, an empty string "", null, undefined and NaN become false. Because of that they are called “falsy” values.
			|
			|	Other values become true, so they are called “truthy”.
			|
			#
			|		
'ELSE'		|	The 'if' statement may contain an optional “else” block. It executes when the condition is wrong.
'CLAUSE'	|	EX:
			|		let age = prompt('What is your age ?', '');
			|		if(age <= 28){
			|			alert('Your are eligible :)');
			|		}
			|		else {
			|			alert('You are not :(');
			|		}
			#
			|
'ELSE IF'	|	Sometimes we’d like to test several variants of a condition. There is an 'else if' clause for that.
			|	EX:
			|		let age = prompt('What is your age ?', '');
			|		if(age <=20){
			|			alert('You are young and not eligible');
			|		}	
			|		else if(age >= 28){
			|			alert('You are too old.');
			|		}
			|		else{
			|			alert('You are eligible !');
			|		}
			|
			#
			|
			|
'TERNARY'	|	Sometimes we need to assign a variable depending on a condition. // TERNARY OR QUESTON OPERATOR.
'OPERATOR ?'|
			|	EX:
			|		let yourAge;
			|		let age = prompt('Your age ?', '');
			|		if(age > 18){
			|			yourAge = age;
			|		}
			|		else if(age == 0){
			|	      alert('Enter value !!');
			|	    }
			|	    else{
			|	      yourAge = 'Below !';
			|	    }
			|
			|		alert(yourAge);
			|
			|	The operator is represented by a question mark ' ? '. The formal term “ternary” means that the operator has three operands.
			|	It is actually the one and only operator in JavaScript which has that many.
			|
			|	EX:	
			|		let age = prompt('Your age !', '');
			|		let accessAllowed = (age > 18) ? 'Good to go.': 'Bad !';
			|		alert(accessAllowed);
			|
			#
			|
			|
'MULTIPLY ?'|	A sequence of question mark ? operators allows returning a value that depends on more than one condition. // Same as else..if
			|
			|	EX:
			|		let age = prompt('Your age ?', '');
			|		let value = (age == 0) ? 'Enter any value !':
			|		    (age < 18) ? 'You are beginner !' :
			|		    (age <= 24) ? 'You may have experince' :
			|		    (age <= 28) ? 'You are well experienced !' :
			|		    'You are too old :~(';
			|		alert(value);
			|
			|	' NON - TRADITIONAL USE OF " ? " ' :  // No use of variable !!
			|	EX:
			|		let company = prompt('Which company created Javascript ?', '');
			|		(company == 'Netscape') ?
			|			alert("You're coreect :)") : alert("Your're wrong :(");
			|
			|
			|	// WORKOUT :
			|				
			|		let username, password;
			|		let user = prompt('Enter username :','');
			|		if(user == 'admin'){
			|		  username = 'Welcome !';
			|		} else {
			|		  username = 'Canceled !';
			|		}
			|		alert(username);
			|
			|		let pword = prompt('Enter Password:','');
			|		if(pword == 'themaster'){
			|		  password = 'Your are good to go  !';
			|		} else {
			|		  password = 'Canceled !';
			|		}
			|		alert(password);
			|
			
	- LOGICAL OPERATORS :

			|	There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT).
			|	Although they are called “logical”, they can be applied to values of any type, not only boolean. The result can also be of any type.
			|
			|
			|
			|
'|| OR'		|	The “OR” operator is represented withh two vertical line symbols:
			|	EX:
			|		result = a || b;
			|	// In classical programming, logical OR is meant to manipulate boolean values only. If any of its arguments are true, then it returns true, otherwise it returns false.
			|
			|	FOUR LOGICAL OR COMBINATIONS : 			// FOR instance 	1 == TRUE AND 0 == FALSE
			|		true || true == true
			|		true || false == true
			|		false || true == true
			|		false || false == false
			|
			|	OR || IN IF STATEMENT :
			|	EX:	
			|		let hour = prompt('Enter value :','');
			|		if(hour < 10 || hour > 18){
			|			alert('The office is closed !');
			|		}
			|
			|	TO GET THE FIRST TRUTHY VALUE : 
			|	EX:
			|		let name_1 = null;
			|		let name_2 = 'Jai';
			|		if(name_1 || name_2 || 'unnamed'){
			|			alert(`Hey ${name_2}`);
			|		} else {
			|			alert('unknown person');
			|
			|	SHORT-CIRCUIT EVALUATION :
			|	EX:
			|		let x;
			|		true || (x = 1);
			|		alert(x);  // undefined, because (x = 1) not evaluated.
			|
			|		let x;
			|		false || (x = 1);
			|		alert(x); 							OUTPUT : 1  // if the first argument is false, then OR goes on and evaluates the second one thus running the assignment.
			|
			|
			#
			|
			|
			|	The AND operator is represented withh two ampersands &&:
			|
			|	result = a && b;
'&& Add '	|
			|	FOUR LOGICAL AND && OPERATORS :
			|		true && true == true
			|		true && false == false
			|		false && true == false
			|		false && false == false
			|
			|	EX:
			|		let hour = prompt("Enter hour in no's:", '');
			|		let min = prompt("Enter minute in no's",'');
			|		if(hour < 13 && min < 61){
			|			alert(`Your time is ${hour} : ${min}`);
			|		}
			|
			|
			|		let hour = prompt("Enter hour in no's:", '');
			|	    let min = prompt("Enter minute in no's",'');
			|	    if(hour < 25 && min < 61 && hour < 12){
			|	      alert(`Your time is ${hour} : ${min} am`);
			|	    } else {
			|	      alert(`Your time is ${hour} : ${min} pm`);
			|	    }
			|
			|
			|	NOTE : 	IF ALL WERE TRUTHY THEN RETURNS THE FINAL VALUE ELSE IF FIRST VALUE IS FALSE RETURN THE FIRST VALUE.
			|
			|	EX:
			|		let name_1 = true;
			|		let name_2 = true;
			|		let jai = name_1 && name_2 && 'hai';
			|		alert(jai);
			|
			|	Just like OR, the AND && operator can sometimes replace iff.
			|
			|	EX:
			|		let x = 1;
			|		(x > 0) && alert('Hi there !');	// The action in the right part of && would execute only the previous action is True.
			|
			|
			|
			#
			|
'! NOT'		|	The boolean NOT operator is represented withh an exclamation sign !.
'OPERATOR'	|	SYNTAX :
			|			a =! b;
			|					// First converts the operand to Boolean value TRUE / FALSE.
			|					// THEN RETURN THE INVERSE VALUE.
			|	EX:
			|		alert(!true);							OUTPUT : false
			|		alert(!0);								OUTPUT : true
			|
			|
			|	A double NOT !! is sometimes used for converting a value to boolean type:
			|	EX:
			|		alert(!! 'Not empty string.'); 			OUTPUT : true
			|		alert(!!null);							OUTPUT : false
			|
			|	There’s a little more verbose way to do the same thing – a built-in Boolean function:
			|	EX:
			|		alert(Boolean('not a string !'));		OUTPUT : true
			|		alert(Boolean(null));						OUTPUT : false
			|
			|	NOTE : The precedence of NOT ! is the highest of all bitwise operators, so it always executes first, before any &&, ||.
			|
			|
			|

	- LOOPS	: 	Loops are a way to repeat the same part of code multiple times.

			|	
'WHILE'		|	WHILE THE CONDITION IS TRUE THEN EXECUTES THE CODE.
			|	SYNTX:	
			|			while(condition){
			|				// Code...
			|			}
			|
			|	EX:
			|		let i = 0;
			|		while(i < 3){
			|			alert(i);
			|			i++;	// When there is no 'i++' then the loop has no end. To stop this action the browser itself ends the process. 
			|		}				// Single loop is called iterations and here it takes 3 iterations.
			|
			|		let num = 0;
			|		while(num){
			|			alert(num);
			|			num--;		// When num becomes 0 then the statement becomes falsy and the looping halts.
			|		}
			|
			|	For Single - Line Body:
			|	EX:
			|		let num = 3;
			|		while(num) alert(num--);	// short form of above process.
			|
			#
			|
			|
			|	
'do while'	|	The condition check can be moved below the loop body using the do..while	
			|	SYNTAX:
			|			do{..}While(condtion);
			|
			|	EX:
			|		let num = 0;
			|		do{
			|			alert(num);
			|			num ++;
			|		}while(num < 3);
			|
			#
			|
			|	The FOR loop is the most often used one.
'FOR'		|
			|	SYNTAX:
			|			for (begin; condition; step){
			|				// Loop body
			|			}
			|
			|	EX:
			|		for (let num = 0; num <= 4; num ++){		// Here num is inline variable declaration.
			|			alert(num);
			|		}
			|		alert(num); // It doesn't work bcoz the var inside the for loop is inline variable. To make it work we should declare var outside the loop.
			|
			|	SKIPPING PARTS :
			|		You can skip Begin and Step part form for loop.
			|	EX:
			|		for (;num<3;num++){			// Removing the Begin part
			|			// loop body
			|		}
			|
			|		for (num<3){				// REMOVING THE STEP PART
			|			alert(num++);
			|		}
			|
			#
			|
'BREAKING'	|	Normaly, The loop exits when the condition is fault. But we can do it manually by using 'break' directive.
'THE'		|	EX:
'LOOP'		|		let age = 0;
			|		while(true){
			|			let value = +prompt('Your age ?', '');
			|			if(!value) break;
			|			age += value;
			|		}	
			|		alert(age);
			|
			#
			|
'CONTINUE'	|	The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead it stops the current iteration and 
			|	forces the loop to start a new one (if the condition allows).
			|
			|	EX:
			|		for(num = 0; num <10; num++){
			|			if(num % 2 == 0) continue;
			|			alert(num);
			|		}
			|
			|	NOTE : CONTINUE AND BREAK WONT WORK IN 'if(condition)? break || continue;'.
			|
			#
			|
			|	The ordinary break after input would only break the inner loop. That’s not sufficient. Labels come to the rescue.
'LABELS'	|	A label is an identifier withh a colon before a loop.
'FOR'		|	
'BREAK' &	|	SYNTAX:
'CONTINUE'	|		labelName: for(..){}
			|
			|	EX:
			|		outer : for(let num=0; num<10; num++){
			|					for(let val=0; val<10; val++){
			|						let input = prompt(`Enter values are ${num}, ${val}`);
			|						if(!input){
			|							break outer;
			|						} else {
			|							alert('Done !');
			|						}
			|					}
			|				}d
			|
			|
			|	TASK 1 : PRINT EVEN NUMBER FROM 0 TO 10.
			|				
			|	let even = 0;
			|	for(;even<=10; even++){
			|		if(even % 2 != 0) continue;
			|		alert(even);
			|	}
			|	alert(`Total numbers are ${even}.`);
			|
			|	TASK 2 : NUM++ IN WHILE AND FOR LOOP.
			|
			|	let num = 0;
			|	for(;num<3;num++){		// For loop
			|		alert(num);
			|	}
			|
			|
			|	let num = 0;
			|	while(num<3){			// For loop
			|		alert(num);
			|		num++;
			|	}
			|
			|
			
	- THE SWITCH STATEMENT :

			|
			|	A switchh statement can replace multiple iff checks. It gives a more descriptive way to compare a value withh multiple variants.
			|	
			|	SYNTAX:
			|			switch(x){
			|				case 'val1': 	// (x === 'val1')
			|					// BODY
			|					break;
			|
			|				case 'val2': 	// (x === 'vall2')
			|					// BODY
			|					break;
			|
			|				default:
			|					// BODY
			|					break;
			|			}
			|			
			|	EX:
			|		let num = 2 + 2;
			|		switch(num){
			|				case 3:
			|					alert('Too small');
			|					break;
			|				case 4:
			|					alert('Exactly');
			|					break;
			|				case 5:
			|					alert('Too large');
			|					break;
			|				default:
			|					alert('Value doesnt exists.');
			|		}
			|
			|	Any expression can be a switchh_case argument :
			|
			|	EX:
			|		let a = '1';
			|		switch(+a){
			|			case b + 1: 
			|				alert('This runs, Because +a == 1, so equals b + 1.');
			|				break;
			|			default:
			|				alert('Dont know.');
			|		}
			|
			#
			|
'GROUPING OF'|	Several variants of case which share the same code can be grouped.
'CASE'		|
			|	EX:
			|		let a = 4 + 4;
			|		switch(a){
			|			case 8:
			|				alert('Correct');
			|				break;
			|			case 5:
			|			case 6: 			// case grouping
			|				alert('You are wrong');
			|				alert('You need a math class');
			|				break;
			|		}
			|
			|
			|	TASK 1 : REWRITE SWITCH INTO IF..ELSE.
			|
			|	let browser = prompt('Enter values to check :','');
			|	while(!browser||browser==0){
			|	  browser = prompt('Enter values to check :','');
			|	  if(browser == true) break;
			|	}
			|	let result = (browser == 'edge')? "You've got the Edge!" :
			|	(browser == 'chrome'
			|	||browser == 'firefox'
			|	||browser == 'safari'
			|	||browser == 'opera')?
			|	'Okay we support these browsers too' : `${browser} is not in our list!`;
			|	alert(result);
			|
			|
			|	TASK 2 : REWRITE CODE FROM IF..ELSE TO SWITCH.
			|
			|	let num = +prompt('Enter values :', '');
			|	switch(num){
			|	  case 0 :
			|	    alert(0);
			|	    break;
			|	  case 1:
			|	    alert(1);
			|	    break;
			|	  case 2:
			|	  case 3:
			|	    alert('2, 3');
			|	  default:
			|		alert('Wrong number.');
			|	}
			|

	- FUNCTIONS :

			|
			|	To create a function we can use a function declaration.
			|
			|	function showMessag(){
			|		alert('hai');
			|	}
			|
			|	functionKeyword functionName(parameters || function arguments){
			|		funcition body (i.e) Code;			// This function is called my its name later.
			|	}
			|
			|	functionName();			// Caliing the function name executes the code.
			|
			#
			|
'LOCAL VAR'	|	A variable decleared inside the function is called LOCAL VARIABLE.
			|
			|	EX:
			|		function showMessage(){
			|			let message = 'Hello world !';		// LOCAL VARIABLE
			|			alert(message);
			|		}
			|		showMessage();		// This runs the above function.
			|
			|		alert(message);		// This wont work bcoz the var is declared inside the function.
			|
			#
			|
			|	let userName = 'Jhon';						// OUTER VARIABLE
'OUTER VAR'	|	function name(){
	'or'	|		alert(userName);
'GLOBAL'	|	}
'VARIABLE'	|	name();
			|
			|	alert(userName);		// NOW IT WORKS HERE.
			|
			|	THE FUNCTION CAN MODIFY THE VARIABLE.
			|
			|	let name = 'jai';
			|	function user(){
			|		name = 'jini';
			|		alert('hello'+name);
			|	}
			|	alert(name);		// OLD VALUE
			|	user();				// CALLING THE FUNCTION
			|	alert(name);		// MODIFIED VALUE
			|		
			|
			|	let name = 'jai';			// THE LOCAL VARIABLE DID NOT ACCESSED THE OUTER VARIABLE SO IT REMAINS UNCHANGED.
			|	function user(){
			|		let name = 'jini';
			|		alert('hello'+name);
			|	}
			|	user();				// CALLING THE FUNCTION
			|	alert(name);		// UNCHANGED VALUE      OR GLOBAL VARIABLE
			|
			|
			#
			|
			|	We can pass arbitrary data to functions using parameters (also called function arguments) .
'PARAMETERS'|
			|	EX:
			|		function message(from, text){
			|			alert(from + ' : ' + text);
			|		}
			|		message('jai', 'hello world');
			|	///////////
			|		function message(from, text){
			|			from = '< '+ from + ' >';
			|			alert(from + ' : ' + text);
			|		}
			|		message('Jai', 'Hello World!');
			|		alert(from);
			|
			#
			|
			|	If a parameter is not provided, then its value becomes undefined.
'DEFAULT'	|	EX:
'VALUES'	|		function message(from, text){
			|			alert(from + ' : ' + text);
			|		}
			|		message('jai');										OUTPUT : jai : undefined
			|
			|		// THE VALUE FOR TEXT IS NOT GIVEN SO IT SHOWS UNDEFINED.
			|
			|		function message(from, text = anotherMessage()){		// anotherMessage() is a function only runs when a parameter is missing.
			|			alert(form + ' : ' + text);
			|		}
			|		message('jai');
			|	
			|		///////////////////
			|		
			|		function fName(from, text){
			|			text = text || 'no defined values';
			|			alert(from + ' : ' + text);		
			|		}
			|		fName('Jai');		// shows ' no defined values ' if there is no parameter.
			|		fName('Jai', 'Says hai!');
			|
			#
			|
			|	A function can return(DIRECTIVE) a value back into the calling code as the result.
'RETURNING'	|	
'A VALUE'	|	EX:
			|		function fName(val1, val2){
			|			return(val1+val2);
			|		}
			|		let add = fName(2, 3);				or 				alert(sum(2,3));
			|		alert(add);
			|
			|		///////////
			|
			|		function checkAge(age){
			|			if(age > 18){
			|				return true;
			|			} else {
			|				return confirm('Got permission ?');
			|			}
			|		}
			|		let age = prompt('Enter values :','');
			|		if(checkAge){
			|			alert('Access Granted');
			|		} else {
			|			alert('Access Denied');
			|		}
			|
			|		///////////////
			|
			|		function checkAge(age){															function checkAge(age){
			|			if(age > 18){																	return (age > 18)? true : <---// change this ':' to this '||'.
			|				return true;						or 											confirm('Do you pass ?');
			|			} else {																	}
			|				return false;															let age = prompt('Enter ur age :','');
			|			}																			let showMovie = (checkAge(age)? 'Access Granted' : 'Access Denied';
			|		}																				alert(showMovie);
			|		
			|		let age = prompt('Enter Your age :'.'');
			|
			|		function showMovie(){
			|			if(!checkAge(age)){
			|				return alert('Failed !');
			|			} else {
			|				return alert('Showing you the movies...');
			|			}
			|		}
			|		
			|		showMovie();
			|
			|	NOTE : 	 a function does not returnn a value, it is the same as iff it returns undefined.
			|
			|	EX:	
			|		function doNothing(){};
			|		alert(doNothing() === undefined);		OUTPUT : true.
			|
			#
			|
'NAMING A'	|	
'FUNCTION'	|
			|
			#
			|
			|	
'FUNCTIONS'	|
'=='		|
'COMMENTS'	|
			#
			|
			|	TASKS :
			|			
			|	FINDING MINIMUM VALUE :						
			|
			|		function comparing(a, b){
			|			let compare = (!a && !b)? 'Try again':
			|				(a == b)? 'Both are eqaul.': 
			|				(a < b)? `${a} is the smallest.` : `${b} is the smallest.`; 
			|			alert(compare);
			|		}
			|		let a = prompt('Enter value for a:');
			|		let b = prompt('Enter value for b:');
			|		comparing(a, b);
			|
			|
			|	FUNCTION TO RETURN VALUE MULTIPLIED BY n TIMES  :		
			|
			|		function pow(x, n){
			|			return x ** n;
			|		}
			|		let x = prompt('Enter value for X :');
			|		let n = prompt('Enter value for n :');
			|		pow(x, n);
			|
			|	TO FIND PRIME NUMBERS :
			|		
			|		function showPrimes(n) {
			|		  nextPrime: for (let i = 2; i < n; i++) {
			|		    	for (let j = 2; j < i; j++) {
			|	      			if (i % j == 0) continue nextPrime;
			|		    	}
			|				alert( i ); // a prime
			|		  	}
			|		}
			|		number = prompt('Enter the value :','');
			|		showPrimes(number);
			|
			|
			|
			#
			|	NOTE : FUNCTION DECLARATION SUPPORTS FUNCTION CALLING BEFORE EXECUTION.
			|		   BUT FUNCTION EXPRESSION DOESNT SUPPORT THIS METHOD.
			|
			|
'FUNCTION'	|	The syntax we used above are 'FUNCTION DECLARATION'.
'EXPRESSION'|
	&		|	// FUNCTION DECLARATION : 	A function, declared as a separate statement, in the main code flow.
'ARROWS'	|		function sayHi(){
			|			return alert('Hello jai');
			|		}
			|		sayHi();
			|
			|	// FUNCTION EXPRESSION : 	A function, created inside an expression or inside another syntax construct.
			|							 // Here, the function is created at the right side of the “assignment expression” =:		|
			|		let sayHi = function(){
			|			return alert('Hello jai');
			|		};	// There should be a semicolon at the end for every function expression.
			|		sayHi();
			|
			#
			|	The function should ask the question and, depending on the user’s answer, call yes() or no().
			|
'CALL BACK'	|
'FUNCTION'	|	let ask = function(question, yes, no){
			|				if(confirm(question)) yes()
			|				else no();
			|			};
			|
			|	let yes = function(){
			|				return alert('You agreed !');
			|			};
			|
			|	let no = function(){
			|				return alert('You not agreed !');
			|			};
			|	
			|	ask('Do you agree ?', yes, no);						// REGULAR WAY
			|
			|/////////////////
			|	
			|	let ask = function(question, yes, no){
			|				if(confirm(question)) yes()
			|				else no();
			|			};
			|
			|	ask(
			|			'Do you agree ?',
			|			function(){ alert('You agreed.')}			// These functions expressions have no name so can't be accessed outside. 				
			|			function(){ alert('You not agreed.')}
			|		);												// FUNCTION EXPRESSION
			|
			|/////////////////
			|
			|	let age, party;
			|	age = prompt('Enter your age :','');
			|	party = function(welcome, notWelcome){
			|		if(age > 18) welcome()
			|		esle notWelcome()
			|	};
			|	party(
			|		function(){alert('You are welcome.')},
			|		function(){alert('You are not welcome')}
			|	);	
			|
			#
			|
			|	
'ARROW'		|	This creates a function func that has arguments arg1..argN, evaluates the expression on the right side with their use and returns its result.
'FUNCTIONS'	|
			|	NOTE :
			|			(a, b) --> Multiple parameters.
			|			a 	   --> Only one parameter.
			|			()	   --> No parameters.	
			|
			|	EX:
			|
			|		let age, party;								// MORE SHORTER WAY THAN FUNCTION DECLARATION AND FUNCTION EXPRESSION.
			|		age = prompt('Enter your age :','');
			|		party = (welcome, notWelcome) => (age > 18)? welcome() : notWelcome();
			|		party(
			|			() => alert('You are allowed !'),
			|			() => alert('You are not allowed')
			|		);													
			|
			|







																		 THE OBJECT BASICS







			|		As we know from the chapter Data types, there are seven data types in JavaScript. Six of them are called “primitive”,
			|	because their values contain only a single thing (be it a string or a number or whatever).
			|
			|		An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair,
			|	where key is a string (also called a “property name”), and value can be anything.
			|
			|
			|	// EMPTY OBJECT CREATED USING ONE OF TWO SYNTAXES.
			|
			|	let person = new Object();	// OBJECT CONSTRUCTOR SYNTAX
			|			(or)
			|	let person = {...}; 	// OBJECT LITERAL SYNTAX
			|
			#	
			|
'LITERALS'	|	key: value pairs
	&		|
'PROPERTIES'|	let user = {			// Object
			|		name : 'Jai',		// Property
			|		age : 24,
			|	};
			|
			|	Property values are accessible using the dot notation.
			|		alert(user.name);	// Jai
			|		alert(user.age);	// 24
			|
			|	To remove a property, use:
			|	
			|		delete user.place;
			|
			|	Multiword property : Key must be quoted
			|		
			|		let user = {
			|			name : 'jai',
			|			'male' : true,
			|		};
			|
			|	square brackets :
			|	
			|		let user = {
			|			'male' : true,
			|		};
			|	
			|		alert(user.'male');	------->	Wrong way.
			|
			|		alert(user['male']); ------>	Correct way.
			|
			|		delet user['male'];
			|	
			|		//////////////	
			|
			|		let user = {
			|			name : 'jai',
			|			age : 24,
			|			'male' = true,
			|		};
			|
			|		let key = prompt('Which key you want to know ?', 'Ex: name');	//	For Ex: key ' male ' show ture.
			|
			|		alert( user[key] );
			|
			|
			|	COMPUTED PROPERTIES :
			|		We can use square brackets in an object literal. That’s called computed properties.
			|
			|		let tKey = prompt('Enter temp key :', 'Ex: Chennai');			// ASK'S FOR TEMP KEY.
			|		let tVal = prompt('Enter temp value for temp Key :', '');		// ASK'S FOR TEMP VALUE.
			|		
			|		let user = {
			|			name : 'jai',
			|			[tKey + ' computers'] : tVal,		// IF tKEY IS APPLE THEN THE KEY SHOULD BE ' APPLE COMPUTERS '
			|		};
			|		
			|		let key = prompt('Enter the key to show the value :', '');
			|	
			|		alert( user[key] );
			|
			|		Square brackets are much more powerful than the dot notation. They allow any property names and variables.
			|		But they are also more cumbersome to write.
			|
			|		This can be written in short key: "value", 
			|
			|		let user = {};
			|			
			|		user.name = 'jai';
			|		user.age = 24;
			|
			|		alert(user.name);
			|
			#
			|
			|	In real code we often use existing variables as values for property names.
'PROPERTY'	|
'VALUE'		|	function makeUser(name, age) {
'SHORTHAND'	|		return {												return {			// This also does the same thing.
			|			name : name,					or 						name,
			|			age : age,												age : 24,	
			|		};														};
			|	}	
			|
			|	let user  = makeUser('jai', 24);
			|
			|	alert(user.name);		// jai
			|
			#
			|
'EXISTENCE'	|	This feature is to check whether the key is present inside the object or not.		
'CHECK'		|
			|	let user = {
			|		name : 'jai',
			|		age : 24,
			|	};
			|
			|	alert(user.name === undefined);		// OUTPUT : False
			|	alert('age' in user);				// OUTPUT : True 
			|
			#
			|
'FOR...IN'	|	Executes the body for each key among object properties.
'LOOP'		|
			|	let user = {	
			|		name : 'jai',
			|		age : 24,
			|	};
			|	
			|	for( let keys in user ) {
			|		alert(keys + ' : ' + user[keys]);
			|	}
			|
			|	OREDERED PROPERTIES :
			|
			|	Mostly, If the keys are integers then they are in ascending oreder.
			|
			|	let user = {
			|		name : 'jai',
			|		'4' : 'four',
			|		'1' : 'one',
			|		'5' : 'five',
			|		'2' : 'two',
			|	};
			|
			|	for( let keys in user ) {
			|		alert(keys);			// This will order those numerical keys into ascending format.
			|	}
			|
			|	To avoid this ordering  we should add + sign infront of the key to consider it as a string.
			|
			|	let user = {
			|		'+4' : 'four',
			|		'+1' : 'one',
			|		'+5' : 'five',
			|		'+2' : 'two',
			|	};							// Now it works as expected.
			|
			|	user.country = 'India';		// Adding new key and value to the existing object.
			|	
			|	for( let keys in user ) {
			|		alert(keys);
			|	}
			|	
			#
			|
'COPYING'	|	Primitive values: strings, numbers, booleans – are assigned/copied “as a whole value”.
	'BY'	|
'REFERENCE'	|	Objects are not like that. A variable stores not the object itself, but its “address in memory”, in other words “a reference” to it.
			|
			|	let user = { name : 'jai'};
			|	let admin = user;
			|
			|	admin.name = 'sonu';
			|
			|	alert(user.name);	// 'sonu', changes are seen from the "user" reference
			|
			|
			|	'COMPARISION BY REFERENCE' :
			|
			|	The equality == and strict equality === operators for objects work exactly the same.
			|
			|	Two objects are equal only if they are the same object.
			|	
			|	let a = { name : 'jai' };
			|	let b = a;
			|
			|	alert(a == b);	//True
			|	alert(a === b);	//True 
			|
			|	And here two independent objects are not equal, even though both are empty:
			|
			|	let a = { };
			|	let b = { };
			|
			|	alert(a == b);	// False
			|	alert(a === b);	// False
			|
			|
			|
			|	'CONT OBJECT ' :
			|
			|	An object declared as const can be changed.
			|
			|	Const user = { name : 'jai', };
			|
			|	let user.age = 24;
			|
			|	alert(user.age);
			|
			|	user = { name : 'sonu' };
			|	
			|	alert(user.name);
			|
			#
			|
'CLONING'	|	Copying an object variable creates a another reference to the same object.
	&		|	
'MERGING'	|	To clone the object without creating a reference :
			|
			|	let user = {
			|		name : 'jai',
			|		age : 24,
			|	};
			|
			|	let cloned = { };	// Cloning user properties to the cloned object.
			|
			|	for (let keys in user) {
			|		cloned[keys] = user[keys];
			|	}
			|
			|	cloned.name = 'sonu';
			|
			|	alert(user.name);		//	jai
			|	alert(cloned.name);		//	sonu
			|	alert(cloned.age);		// 	24
			#
			|
'OBJECT.'	|	Also we can use the method Object.assign for that.
'ASSIGN'	|
			|	let user = {
			|		name : 'jai',
			|	};
			|
			|	let user1 = {
			|		age : 24,
			|	};
			|
			|	let user2 = {
			|		name : 'sonu',		// It also overwrites the previously assigned value.
			|		place : 'Chennai',
			|		country : 'India',
			|	};
			|
			|	Object.assign(user, user1, user2);
			|
			|	for (let keys in user) {
			|		alert(keys + ' : ' + user[keys]);
			|	}
			|
			|
			|	'Cloning made easy with Object.assign method' :
			|	
			|		let user = {
			|			name : 'jai',
			|			age : 24,
			|			place : 'Chennai',
			|		};
			|
			|		let cloned = ({}, user);		// Uses assignment method to clone object.
			|
			|		for (let keys in cloned) {
			|			alert(keys + ' : ' + user[keys];
			|		}
			|
			|
			|
			|
			|
			|		let user = {
			|			name : 'jai',
			|			age : 24,
			|			location : {
			|				place : 'Chennai',
			|				country : 'India',
			|			},
			|		};
			|
			|		let cloned = Object.assign({}, user);		// makes a referenceof user object to clone object.
			|		user.location.place = 'Veppampattu';		// user property rewritten.
			|		
			|		alert(cloned.location === user.location);	// true
			|		alert(cloned.location.place);				// veppampttu
			|	
			|
			|	KEY NOTE :
			|
			|		- To delete a property use : delete object.property.	EX: delete user.name;
			|		- To check the existence of the property use : 'key' in obj;	EX: alert('name' in user);
			|		- To iterate over an object use : for (let key in obj){...}	EX: for (let key in user) { alert(key) }; 																}
			|		- To make a reference of an existing object use : Object.assign() method. EX: let clone = Object.assign({}, user);
			|
			|
			|	TASK :
			|	
			|		To multiply numeric values by 2 in a object :
			|
			|		let menu = {
			|			width : 200,
			|			height : 600,
			|			title : 'my title',
			|		};
			|		
			|		function multiplyNumeric(menu) {
			|			for (let keys in menu) {
			|				if(typeof(menu[keys]) == 'number') {
			|					menu[keys] *= 2;
			|				}
			|			}
			|			return;
			|		}
			|
			|		alert(menu.width);
			|		multiplyNumeric(menu);
			|		alert(menu.width);
			|
			|

	-	GARBAGE COLLECTOR :

			|
			|	Garbage collector is the background process runs in javascript which collects junks and unused objects,variables, thus freesup the memory.
			|
			|	EX:
			|		let user = { name : 'jai'};			// User has a reference to the object.
			|
			|		let user = ( age : null );			// It doest contain any value and reference is lost. So garbage collector collects it.
			#
			|
'TWO'		|	Now lets imagine we copied the referencefrom user to admin.
'REFERENCE'	|
			|	let user = {name: 'jai'};
			|
			|	let admin = user;
			|
			|	The object has the two reference. Now, if we modify the value of user into null, then the object is still reachable via admin.
			#
			|
'INTRELINKED'|	More complex  example :
'OBJECTS'	|
			|	function marry (man, woman) {
			|		woman.husband = man;
			|		man.wife = woman;
			|
			|		return {
			|			father : man,
			|			mother : woman
			|		}
			|	}
			|
			|	let family = marry({name : 'Jai'}, {name : 'Jini'});
			|
			|
			|	delete family.father;
			|	delete family.woman.husband;	// By removing the two reference there is no incoming reference to the object 1.
			|	
			|	So, The Garbage collector removes that unreachable Object 1.
			|
			|	family = null // Remove the entire object inside the family variable.
			|
			|
			|	JavaScript engines apply many optimizations to make it run faster and not affect the execution.
			|
			|		- 'Generational collection' :
			|				Objects are split into two sets: “new ones” and “old ones”. Many objects appear, do their job and die fast, they can be cleaned up aggressively.
			|			Those that survive for long enough, become “old” and are examined less often.
			|
			|		- 'Incremental collection' :
			|				If there are many objects, and we try to walk and mark the whole object set at once, it may take some time and introduce visible delays
			|				in the execution. So the engine tries to split the garbage collection into pieces. Then the pieces are executed one by one, separately.
			|				That requires some extra bookkeeping between them to track changes, but we have many tiny delays instead of a big one.
			|	
			|		- 'Idle-time collection' :
			|				The garbage collector tries to run only while the CPU is idle, to reduce the possible effect on the execution.
			|
			|

	- SYMBOL TYPE :

			|
			|	Object property keys may be either of string type, or of symbol type. Not numbers, not booleans, only strings or symbols, these two types.
			|	
			|
'SYMBOL'	|	“Symbol” value represents a unique identifier.
			|
			|	A value of this type can be created using Symbol():
			|
			|		let id = Symbol();	// id is a new symbol.
			|	
			|	A symbol name can be given for identification.
			|	
			|		let id = Symbol('id');
			|
			|	Symbols with same discription doesnt affect anything.
			|
			|		let id1 = Symbol('id');
			|		let id2 = Symbol('id');
			|
			|	Symbols dont 'auto-convert' :
			|		
			|		let id = Symbol('id');
			|		
			|		alert(id);	//Type error..
			|		alert(id.toString());	// Manually converted to string to make it work.
			|
			#
			|
'HIDDEN'	|	Symbols allow us to create “hidden” properties of an object, that no other part of code can occasionally access or overwrite.
'PROPERTIES'|
			|	For instance, if we want to store an “identifier” for the object user, we can use a symbol as a key for it:
			|
			|		let user = { name : 'jai' };
			|		let id = Symbol('id');
			|	
			|		user[id] = 'ID value';
			|
			|		alert(user[id]);	// We can access data using a symbol as a key.
			|
			|
			|	There will be no conflict, because symbols are always different, even if they have the same name.
			|
			|		let user = { name : 'jai' };
			|		let id1 = Symbol('id');
			|		
			|		user[id1] = 'ID value';
			|
			|		let id2 = Symbol('id');
			|
			|		user[id2] = 'New id added';
			|
			|		alert(user[id2]);
			|
			|
			|	'SYMBOLS IN OBJECT LITERALS' :
			|
			|	If we want to use a symbol in an object literal, we need square brackets.
  			|
			|	let id = Symbol('id');
			|
			|	let user = {
			|		name : 'Jai',
			|		[id] : 1994,	// That’s because we need the value from the variable id as the key, not the string “id”.
			|	};
			|
			|	
			|	'SYMBOLS WILL NOT WORK IN FOR...IN LOOP':
			|		
			|	Symbolic properties do not participate in for..in loop.
			|
			|		let age = Symbol("User's Age");
			|		let user = {
			|			name : 'Jai',
			|			[age] : 24,
			|		};
			|
			|		for (let keys in user) alert(keys);	// Alerts only name not the symbol ''
			|
			|		alert(user[age]);	// The direct access by the symbol works.
			|
			|
			|	In contrast, Object.assign copies both string and symbol properties:
			|
			|		let age = Symbol('Users age');
			|		let user = {
			|			name : 'Jai',
			|			[age] : 1994,
			|		};
			|		
			|		let clone = Object.assign({}, user);
			|
			|		alert(clone[age]);	// 	1994..It works as expected.
			|
			|	We can only use strings or symbols as keys in objects. Other types are converted to strings.
			|
			|		let user = { 0 : 'Zero'};	// a number 0 becomes a string "0" when used as a property key.
			|
			#
			|
'GLOBAL'	|	Symbols inside the registry are called global symbols. If we want an application-wide symbol, accessible everywhere in the code – that’s what they are for.
'SYMBOLS'	|
			|	let id = Symbol.for('id');	// read from the global registry. If the symbol did not exist, it is created.
			|	let idAgain = Symbol.for('id');	// read it again. 
			|
			|	alert(id === idAgain); // ture 		The same symbol.
			|
			|	'Symbol.keyFor' :
			|
			|	Symbol.for(key) returns a symbol by name, but there’s a reverse call: Symbol.keyFor(sym) that does the reverse: returns a name by a global symbol.
			|
			|	let sym = Symbol.for('id');
			|	let sym2 = Symbol.for('name');
			|
			|	// To get name from the symbol.
			|
			|	alert(Symbol.keyFor(sym)); //	id
			|	alert(Symbol.keyFor(sym2)); //	name
			|
			|	If the symbol is not global, it won’t be able to find it and return undefined :
			|
			|	alert( Symbol.keyFor(Symbol.for('name')));	// name, global symbol.
			|	alert( Symbol.keyFor(Symbol('id')));	// undefined. its not a global symbol.
			|
			#
			|
'SYSTEM'	|	There exist many “system” symbols that JavaScript uses internally, and we can use them to fine-tune various aspects of our objects.
'SYMBOLS'	|
			|	They are listed in the specification in the Well-known symbols table:
			|
			|		- Symbol.hasInstance
			|	
			|		- Symbol.isConcatSpreadable
			|
			|		- Symbol.iterator
			|
			|		- Symbol.toPrimitive	//  allows us to describe object to primitive conversion.
			|
			|
			|

	- OBJECT : THE BASICS : METHOD

			|
			|	'Method Examples' :	
			|
			|	let user = {
			|		name : 'jai',
			|		age : 24,
			|	};
			|
			|	user.sayHi = funciton() {		//	A function that is the property of an object is called its method.
			|		alert('Hello');				//	So, here we’ve got a method sayHi of the object user.
			|	}
			|
			|	user.sayHi();
			|
			|	
			|	' METHOD SHORTHAND' :
			|		
			|	Shorter syntax for method :
			|
			|	Shorter version of the above method example.
			|
			|	let user = {
			|		name : 'Jai',
			|		age : 24,
			|		sayHi() {					// As demonstrated, we can omit "function" and just write sayHi().
			|			alert('Hello');
			|		},
			|	};
			|
			|	user.sayHi();
			|	
			#
			|
'this IN'	|	It’s common that an object method needs to access the information stored in the object to do its job.
  'THE'		|
'METHOD'	|	To access the object, a method can use the this keyword. The value of this is the object “before dot”, the one used to call the method.
			|
			|	let user = {
			|		name : "Jai",
			|		age : 24,
			|		sayHi() {
			|			alert(this.name);			or alert(user.name); //	It’s also possible to access the object without this, by referencing it via the outer variable
			|		},													//	If ' User.name ' is used then later if user = null then it lets to an error.
			|	};	
			|
			|	user.sayHi();
			|
			#
			|
'this'		|	It can used in any funciton and There’s no syntax error in the code. The value of this is evaluated during the run-time. And it can be anything.
'is not'	|
'bound'		|	function sayHi() {
			|		alert(this.name);
			|	}
			|
			|
			|	For instance, the same function may have different “this” when called from different objects:
			|
			|	let userOne = { name : 'Jai' };
			|	let userTwo = ( name : 'Jini' };
			|
			|	function sayHi() {
			|		alert(this.name);
			|	}
			|
			|	userOne.f = sayHi;		// use the same functions in two objects
			|	userTwo.f = sayHi;
			|
			|	userOne['f'](); // dot or square brackets access the method
			|
			#
			|
'INTERNALS'	|	let user = {
'REFERENCE'	|		name : 'Jai',
'TYPE'		|		sayHi() {
			|			alert(this.name);
			|		},
			|		sayBye() {
			|			alert('Bye');
			|		},
			|	};
			|
			|	(user.name == 'Jai' ? user.sayHi : user.sayBye)();	// Error
			|	
			|	You can see that the call results in an error, because the value of "this" inside the call becomes undefined.
			|
			|	This works (object dot method): 	user.sayHi();
			|
			|	This doesn''t : (user.name == 'Jai' ? user.sayHi : user.sayBye)();
			|
			|	Looking closely, we may notice two operations in obj.method() statement:
			|
			|		- First, the dot '.' retrieves the property obj.method.
			|	
			|		- Then parentheses () execute it.
			|
			|	If we put these operations on separate lines, then this will be lost for sure:
			|
			|	let user = {
			|		name : 'Jai',	
			|		hi() {
			|			alert(this.name);
			|		},
			|	};
			|
			|	let hi = user.hi();		//  split getting and calling the method in two lines
			|	hi();					//		Error, because this is undefined
			|	
			|	Here hi = user.hi puts the function into the variable, and then on the last line it is completely standalone, and so there’s no this.
			|
			|	The Reference Type is a “specification type”. We can’t explicitly use it, but it is used internally by the language.
			|
			|	The value of Reference Type is a three-value combination (base, name, strict), where:
			|
			|		- base is the object.
			|		- name is the property.
			|		- strict is true if 'use strict' is in effect.
			|
			|	// Reference type value :
			|	(user, 'hi', true)
			|		
			|	When parentheses () are called on the Reference Type, they receive the full information about the object and its method, and can set the right this
			|
			|	let hi = user.hi; 	// discards the reference type.
			|
			#
			|
'ARROR'		|	Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.
'FUNCTIONS'	|
'HAVE'		|	let user = {
'NO "THIS" '|		name : 'Jai',
			|		hi() {
			|			let arrow = () => alert(this.name);
			|			arrow();
			|		},
			|	};
			|
			|	user.hi();	// jai
			|
			|	
			|'TASK :'
			|
			|		calculator using object.
			|
			|	let calc = {
			|		add() {		
			|			return value1 + value2;
			|		},
			|		sub() {
			|			return value1 - value2;
			|		},
			|		mul() {
			|			return value1 * value2;
			|		},
			|		div() {
			|			return value1 / value2;
			|		},
			|		get() {
			|			this.value1 = prompt('Enter digits for value 1 :', '');
			|			this.value2 = prompt('Enter digits for value 2 :', '');
			|		},
			|	};
			|
			|	calc.get();
			|
			|	let operator = prompt('What kind of arithmetic operation do you need ?', '');
			|
			|	alert(calc[shouldDo]());
			|
			|
			|	'CHAINING ':
			|
			|	let ladder = {
			|		step : 0,
			|		up() {
			|			this.step++;
			|			return this;
			|		},
			|		down() {
			|			this.step--;
			|			return this;
			|		},
			|		show() {
			|			alert(this.step);
			|			return this;
			|		},
			|	};
			|
			|	ladder.show().up().up().up().up().down().show();		// OUTPUT : 3
			|
			|	// We also can write a single call per line. For long chains it’s more readable:
			|
			|
			|	ladder
			|		.show()
			|		.up()
			|		.up()
			|		.up()
			|		.up()
			|		.down()
			|		.show();
			|
			
		- OBJECT TO PRIMITIVE CONVERSION :

			|
			|	What happens when objects are added obj1 + obj2, subtracted obj1 - obj2 or printed using alert(obj)?
			|	
			|	There are special methods in objects that do the conversion.
			|
			|
			#	
			|
'toPrimitive'|
			|	When an object is used in the context where a primitive is required, for instance, in an alert or mathematical operations, 
			|	it’s converted to a primitive value using the ToPrimitive algorithm. That algorithm allows us to customize the conversion using a special object method.
			|
			|	Depending on the context, the conversion has a so-called “hint”.
			|	
			|	There are three variants :
			|		
			|		- String
			|		- Number
			|		- Default
			|		
			|	'STRING' :
			|		When an operation expects a string, for object-to-string conversions, like alert:
			|		EX :
			|		
			|		alert(obj);	// Output
			|		
			|		anotherObj[obj] = 123;	// using object as a property key
			|
			|	'NUMBER' :
			|
			|		When an operation expects a number, for object-to-number conversions, like maths:
			|
			|	EX:
			|		let num = Number(obj);	// Explicit Conversion
			|
			|		let num = +obj;	//	unary plus
			|
			|		let date = date1 - date2;
			|
			|		let comparisson = user1 > user2;
			|
			|	'DEFAULT' :
			|		Occurs in rare cases when the operator is “not sure” what type to expect.
			|	EX:	
			|
			|		let total = car1 + car2;	// binary plus
			|
			|		if (user == 1) { ... };		// obj == string/number/symbol
			|
			|	In practice, all built-in objects except for one case (Date object, we’ll learn it later) implement "default" conversion the same way as "number".
			|	And probably we should do the same.
			|
			|
			|	'To do the conversion, JavaScript tries to find and call three object methods:'
			|
			|	1. Call obj[Symbol.toPrimitive](hint) if the method exists,
			|	2. Otherwise if hint is "string"
			|			- try obj.toString() and obj.valueOf(), whatever exists.
			|	3. Otherwise if hint is "number" or "default"
			|			- try obj.valueOf() and obj.toString(), whatever exists.
			|
			#
			|
'SYMBOL.'	|	There’s a built-in symbol named Symbol.toPrimitive that should be used to name the conversion method.
'toPrimitive'|
			|	syntax :
			|
			|		obj[Symbol.toPrimitive] = function(hint) {
			|			// return a primitive value
			|			// hint = one of string, number, default.
			|		}
			|
			|	EX :
			|		let user = {
			|			name : 'Jai',
			|			id : 1000,
			|		
			|			[Symbol.toPrimitive](hint) {
			|				alert(`hint is ${hint}`);
			|				return hint == 'string' ? this.name : this.age;
			|			},
			|		};
			|
			|		alert(user); 		// jai....string
			|		alert(+user);  		// 1000...number
			|		alert(user + 24); 	// 1024...default
			|
			|	The single method user[Symbol.toPrimitive] handles all conversion cases.
			|
			#
			|
'toString'/	|	Methods toString and valueOf come from ancient times. They are not symbols  but rather “regular” string-named methods. 
			|	They provide an alternative “old-style” way to implement the conversion.
'valueOf'	|
			|
			|		- toString -> valueOf : for “string” hint.
			|		- valueOf -> toString : otherwise.
			|
			|	EX:
			|		let user = {
			|			name : 'Jai',
			|			amount : 1000,
			|			toString() {
			|				return `name : ${this.name}`;
			|			},
			|			valueOf() {
			|				return this.amount;
			|			},
			|		};
			|
			|		alert(user);		//	name : Jai ---> STRING
			|		alert(+user);		//	1000	   ---> NUMBER
			|		alert(user + 24);	//	1024		--> DEFAULT
			|
			|	Often we want a single “catch-all” place to handle all primitive conversions. In this case we can implement toString only :
			|
			|	EX:
			|		let user = {
			|			name : 'Jai',
			|			amount : 1000,
			|			toString() {
			|				return `name : ${this.name}`;
			|			},
			|		};
			|
			|		alert(user);		// name : Jai ---> String
			|		alert(user + 24);	// Jai24		-> Default
			|
			|	In the absence of Symbol.toPrimitive and valueOf, toString will handle all primitive conversions.
			|
			#
			|
'toPrimitive'|	There is no control whether toString() returns exactly a string, or whether Symbol.toPrimitive method returns a number for a hint “number”.
'toString'/	|	The only mandatory thing: these methods must return a primitive.
'toNumber'	|	An operation that initiated the conversion gets that primitive, and then continues to work with it, applying further conversions if necessary.
			|
			|	EX : Mathematical operations (except binary plus) perform ToNumber conversion:
			|
			|	let obj = {
			|		toString() {
			|			return '2';
			|		},
			|	};
			|
			|	alert(obj * 2);		// 4 ToPrimitive gives "2", then it becomes 2
			|
			|
			|	Binary plus checks the primitive – if it’s a 'string', then it does concatenation, otherwise it performs ToNumber :
			|
			|	let obj = {
			|		toString() {
			|			return '2';
			|		},
			|	};
			|
			|	alert(obj + 2);		// 22 (ToPrimitive returned string => concatenation)
			|
			|	FOR NUMBER :
			|	
			|	let obj = {
			|		toString() {
			|			return true;
			|		},
			|	};
			|
			|	alert(obj + 2);		// 3 (ToPrimitive returned boolean, not string => ToNumber)
			|
			
	-	' Constructor, operator "new" ':

			|
			|	The regular {...} syntax allows to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.
			|	That can be done using constructor functions and the "new" operator.
			|
			|
'CONSTRUCTOR'|	Constructor functions technically are regular functions. There are two conventions though:
'FUNCITON'	|		- They are named with capital letter first.
			|		- They should be executed only with "new" operator.
			|
			|	EX:
			|		function User(name) { 
			|			this.name = name;
			|			this.isAdmin = false;
			|		}
			|
			|		let user = new User('Jai');
			|
			|		alert(user.name);		//	Jai
			|		alert(user.isAdmin);	//	false
			|
			|	When a function is executed as new User(...), it does the following steps:
			|
			|		- A new empty object is created and assigned to this.
			|		- The function body executes. Usually it modifies this, adds new properties to it.
			|		- The value of this is returned.
			|
			|	Now if we want to create other users, we can call new User("Ann"), new User("Alice") and so on. Much shorter than using literals.
			|
			|		let user = new function() {
			|			this.name = 'Jai';
			|			this.isAdmin = true;
			|		};
			|		
			#
			|
'DUAL-SYNTAX'|	Inside a function, we can check whether it was called with new or without it, using a special new.target property.	
'CONSTRUCTOR'|	It is empty for regular calls and equals the function if called with new:
			|
			|	function User() {
			|		alert(new.target);
			|	}
			|
			|	User();		// undefined
			|	new User();	// function User { ... }	
			|
			|	That can be used to allow both new and regular calls to work the same. That is, create the same object:
			|
			|	function User(name) {
			|		if(!new.target) {		
			|			return new User(name);
			|		}
			|
			|		this.name = name;
			|	}
			|
			|	let user = User('Jai');
			|	let user1 = new User('jini');
			|	
			|	alert(user.name);
			|	alert(user1.name);
			|
			#
			|
'RETURN'	|	Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.
'FROM'		|	But if there is a return statement, then the rule is simple:
'CONSTRUCTORS'|		- If 'return' is called with 'object', then it is 'returned' instead of this.
			|		- If 'return' is called with a 'primitive', it’s 'ignored'.
			|
			|	function BigUser() {
			|		this.name = 'Jini';
			|	
			|		return { name : 'Jai', };
			|	}
			|
			|	alert(new BigUser().name);		// Jai	
			|
			|
			|	function SmallUser() {
			|		this.name = 'Jini'; 	
			|		
			|		return 'Jai';
			|	}
			|
			|	alert(new SmallUser().name);	// Jini
			|
			|	Usually constructors don’t have a return statement. Here we mention the special behavior with returning objects mainly for the sake of completeness.
			|
			|
			#
			|
'METHODS IN'|	For instance, new User(name) below creates an object with the given name and the method sayHi:
'CONSTRUCTOR'|
			|
			|	function User(name) {
			|		this.name = name;
			|		this.sayHi = function() {
			|			alert(`My name is ${this.name}.`);
			|		}
			|	}
			|
			|	let user = new User('Jai');
			|
			|	user.sayHi();		// My name is Jai.
			|
			#
			|
			|	'TASKS' :
			|
			|		Two functions will access one object and those two functions should be equal when compared to each other.
			|
			|
			|	let name1 = Symbol.for('user');
			|	let name2 = Symbol.for('User');
			|
			|	let obj = {
			|		[name1] : 'Jai',
			|		[name2] : 'Jini',
			|	};
			|
			|	function User1(name) {
			|		this.name = name;
			|		
			|		return obj;
			|	}
			|
			|	function User2(name) {
			|		this.name = name;
			|	
			|		return obj;
			|	}
			|
			|	let user1 = new User1('Sonu');
			|	let user2 = new User2('Moli');
			|
			|	alert(typeof(name));
			|	alert(user1[name1]);
			|	alert(user2[name2]);
			|	alert(`Both user1 and user2 are ${user1 == user2} and Equal.`);
			|
			|		
			///////////////////
			|
			|	Create a constructor function Calculator that creates objects with 3 methods: 	read(), mul(), sum().
			|
			|	function Calculator() {
			|		this.sum = function() {
			|			return this.val1 + this.val2;
			|		};
			|
			|		this.mul = function() {
			|			return this.val1 * this.val2;
			|		};
			|		
			|		this.get = function() {
			|			this.val1 = +prompt('Enter digits for val1 :','');
			|			this.val2 = +prompt('Enter digits for val2 :','');
			|		};
			|	}
			|
			|	let calc = new Calculator();
			|	
			|	calc.get();
			|
			|	alert(`The summed output is ${calc.sum()}`);
			|	alert(`The Mul ouput is ${calc.mul()}`);
			|
			///////////////////
			|
			|	Create a constructor function Accumulator(startingValue).
			|
			|	function Accumulator(startingValue) {
			|		this.value = startingValue;
			|
			|		this.read = funciton() {
			|			this.value += +prompt('Enter the value :','');
			|		};
			|	}
			|
			|	let accu = new Accumulator(1);
			|		
			|	accu.read();
			|	accu.read();
			|	alert(accu.value);
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
	