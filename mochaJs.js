


				AUTOMATED TESTING FOR JAVASCRIPT USING MOCHAJS - MAIN FRAMEWORK / CHAI - ASSERTION LIBRARY / SINON






- CODE QUALITY :

			|	
			|	* 'DEBUGGING IN CHROME'
			|	* 'CODING STYLE'
			|	* 'COMMENTS'
			|	* 'NINJA CODE'
			|	* 'AUTOMATED TESTING'
			#
			|
			|

		- 'TESTING WITH MOCHA AND CHAI' : 	MOCHA - TESTING FRAMEWORK, CHAI - ASSERTION LIBRARAY FOR ANY TESTING FRAMEWORK

'DEVELOPMENT'|
	'OF'	|
'POW : SPEC'|	FOLDER STRUCTURE :
			|
			|		mochaTest
			|			|
			|			|--- test
			|			|		|
			|			|		|--- appTest.js // 	A TEST FILE WHICH USES TEST CASES TO TEST JS CODE.
			|			|
			|			|--- app.js // A FILE WHICH CONTAINS JS CODE 
			|					
			|
			|	package.json setup :
			|	
			|							{
			|			  "name": "js-learning",
			|			  "version": "1.0.0",
			|			  "description": "",
			|			  "main": "app.js",
			|			  "scripts": {
			|			    "test": "mocha || true"		// THE NAME GIVEN TO DESCRIBE IN THE TEST FILE.
			|			  },
			|			  "author": "jaiendiran",
			|			  "license": "ISC",
			|			  "dependencies": {},
			|			  "devDependencies": {
			|			    "chai": "^4.2.0",
			|			    "mocha": "^5.2.0"
			|			  }
			|			}
			|
			|	EX:
			|			mochaTest > app.js 		// JS FILE
			|
			|		module.export = function() {
			|			return 'hello';
			|		}
			|
			|			mochaTest > test > appTest.js 	//TEST FILE
			|
			|		const assert = require('chai').assert;	// CALLING THE CHAIJS ASSERTION
			|		const app = require('../app');			// CALLING THE APP FUNCITON TO BE TESTED FROM JS FILE.
			|
			|		testResult = app.test();		
			|
			|		describe('test', function() {			// 'test' is described as function name.
			|		
			|			it('app should return hello', function() {  // In the title of it we in a human-readable way describe the particular use case.
			|				assert.equal(testResult, 'hello');			// assert module got from chaijs....test is file name return funciton - test()....'hello' is a value returned by test()
			|			});										// Functions assert.* are used to check whether qpp works as expected.
			|	
			|		});
			|
			|
			|	OUTPUT :
			|			
			|		> js-learning@1.0.0 test D:\Files\Docs\Docs\jai\Tryouts\JS Learning
			|		> mocha
			|
			|								
			|		  test
			|		    √ app should return hello
			|
			|
			|		  1 passing (13ms)
			|
			|
			#
			|
			|	ADDING ONE OR MORE ASSERT INTO SAME IT :
			|
			|	JS FILE:
			|
			|	module.exports = {				// module.export is used to access the values outside the function.
			|	  sayHello: function() {		// Two different function in the same module.	
			|	    return 'Hello';
			|	  },
			|	  addNumber : function(value1, value2) {
			|	    return value1 + value2;
			|	  }
			|	}
'IMPROVING'	|
'THE SPEC'	|	const assert = require('chai').assert;		// CALLING THE CHAIJS ASSERTION
			|	const app = require('../app');				// CALLING THE APP FUNCITON TO BE TESTED FROM JS FILE.
			|	// const sayHello = require('../app').sayHello;
			|	// const addNumber = require('../app').addNumber;
			|
			|	// RESULTS
			|	sayHelloResult = app.sayHello();			// Assigning the function to a variable.
			|	addNumberResult = app.addNumber(5, 5);	
			|
			|	describe('app', function() {				// describe with nested describe.
			|	    describe('sayHello()', function() {
			|	        it('app should return hello', function() {
			|	            assert.equal(sayHelloResult, 'Hello');
			|	        });
			|	    
			|	        it('sayHello should reutrn type string', function() {
			|	            assert.typeOf(sayHelloResult, 'string');
			|	        });
			|	    
			|	        it('Length should return 5', function() {
			|	            assert.lengthOf(sayHelloResult, 5);
			|	        });
			|	    });
			|	    
			|	    describe('addNumber()', function() {
			|	        it('should return the summed value', function() {
			|	            assert.equal(addNumberResult, 10, 'Returned value is correct');
			|	        });
			|	    
			|	        it('Its above 5', function() {
			|	            assert.isAbove(addNumberResult, 5);
			|	        });
			|	    });
			|	});
			|
			|///////////
			|
			|	module.exports = {
			|	  pow: function(x, n) {
			|	    let result = 1;
			|
			|	    for (let i = 0; i < n; i++) {
			|	      result *= x;
			|	    }
			|
			|	    return result;  
			|	  }
			|	}
			|
			|
			|
			|	const assert = require('chai').assert;
			|	const app = require('../app');
			|	powerResult = app.pow(x, 3);
			|
			|
			|	describe('pow', function() {
			|	    function makeTest(x) {
			|	        let expected = x * x * x;
			|	        it(`${x} in the power 3 is ${expected}`, function() {
			|	             assert.equal(powerResult, expected);
			|	        });
			|	    }
			|
			|	    for (let x = 1; x <= 5; x++) {
			|	      makeTest(x);  
			|	    }
			|	    
			|	}); 
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
			|
