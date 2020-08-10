var similarity = require( 'compute-cosine-similarity' );

var x = [0.06, 0.06, 0.06, 0.06, 0.06, 0.66];
var y = [3, 3, 3, 3, 3, 30];


var s = similarity( x, y );

console.log(s);