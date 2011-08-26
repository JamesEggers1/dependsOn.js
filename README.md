# dependsOn.js

A simple script to explicitly assert if a dependency of your current module has been loaded. 

Not having the proper dependencies loaded can yield a number of TypeErrors if a module or namespace isn't loaded yet.  Using dependsOn, you'll be able to assert that a module's dependencies have been explicitly loaded else, a descriptive error will be throw to state what is not currently present.

## Example (1)

```javascript
(function($, window){
	var MyObj = function(config){
	
		// should always be true because of the extend lines below.
		dependsOn("myNamespace");
		
		// will throw an error if window.myNamespace.myOtherObject isn't defined.
		dependsOn("myOtherObject", window.myNamespace);
		
		// errors if there is no config.property1
		dependsOn("property1", config);
		
		...
	};
	
	$.extend(window, {myNamespace: window.myNamespace || {}});
	$.extend(window.myNamespace, {MyObj: MyObj});
}(jQuery, window));
```

## Overview

- dependsOn extends the global window object's prototype to provide the functionality.
- it accepts a name string of what you're looking for as the first parameter.
- an optional second parameter is provided to define what scope/object you're looking in. If not provided, window will be used.

## License (MIT)

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