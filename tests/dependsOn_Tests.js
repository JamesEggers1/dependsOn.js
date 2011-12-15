/*
Copyright (c) 2011 James Eggers, http://www.jamesreggers.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var fixture = new TestCase("In using dependsOn, ");

fixture.prototype["test that the method is defined."] = function(){
	assertNotUndefined("dependsOn should be defined if loaded.", dependsOn);
	assertTypeOf("dependsOn should be defined as a function.", "function", dependsOn);
};

fixture.prototype["test that the dependency exists for a provided object. (happy path)"] = function(){
	var config = { property1: "test"};
	
	assertTrue("The config should contain a property1 member.", dependsOn("property1", config));
};

fixture.prototype["test that an error is thrown if the dependency does not exist for a provided object. (sad path)"] = function(){
	var config = { property1: "test"};
	var test = function(){
		dependsOn("property2", config);
	};
	
	assertException("The config should be missing a property2 member.", test, "ReferenceError");
};

fixture.prototype["test that the dependency exists using default scope. (happy path)"] = function(){
	window.property1 =  "test";
	
	assertTrue("The default scope should contain a property1 member.", dependsOn("property1"));
};

fixture.prototype["test that an error is thrown if the dependency does not exist using default scope. (sad path)"] = function(){
	var test = function(){
		dependsOn("property2");
	};
	assertException("The default scope should be missing a property2 member.", test, "ReferenceError");
};