# GetExplicitType

Returns any variable explicit type, taken from its constructor name:  
{ Array | Arguments | Object | Function | RegExp | Number | String | Symbol | Promise }


**Usage:**

```js
const GetType = require( 'get-explicit-type' );

// GetType( {obj|Mixed} ) => {String}

var type = GetType( [] );

console.log( type ) => 'Array'


/* ------------ Careful ------------- */

class Test {}

var type = GetType( new Test );

console.log( type ) => 'Object'

```
