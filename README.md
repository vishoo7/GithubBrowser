To build: npm install

To run: npm start

A few of the ES6 (or whatever you prefer to call it) features that I have included:
- Classes
- 	This structure for components is especially favored over React.createClass 
- Destructure
- 	It's a much cleaner way to alias things
- Default Parameters
- Object spread operator
- 	It was a convenient way to adhere to the immutability that's needed for redux
- Arrow functions
- 	It's less verbose 
- Promises
- 	For doing something after getting a response from the API
- let and const
- 	let is safer than var for scoping, and const prevents reassignment. There is no compelling reason to use var anymore


Ideas to complete the exercise:
-I somewhat violated the flux pattern with search. I could have had an action (i.e. SEARCH_TEXT) and reducer
-I could have made the application more robust, i.e. handle bad responses from the API by catching exceptions on the promise and doing something
-Unit tests. Better for large (and high stakes) projects, but I would put checks on the reducers to make sure the reducers adhere to the immutability requirement
